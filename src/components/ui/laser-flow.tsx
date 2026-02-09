import type React from "react"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

type LaserFlowProps = {
  className?: string
  style?: React.CSSProperties
  color?: string
  wispDensity?: number
  flowSpeed?: number
  verticalSizing?: number
  horizontalSizing?: number
  fogIntensity?: number
  wispSpeed?: number
  wispIntensity?: number
  enableParallax?: boolean
  parallaxSpeed?: number
}

const VERT = `precision highp float;
attribute vec3 position;
void main(){
  gl_Position = vec4(position, 1.0);
}`

const FRAG = `#ifdef GL_ES
precision highp float;
#endif

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uFade;
uniform float uWispDensity;
uniform float uFlowSpeed;
uniform float uVLenFactor;
uniform float uHLenFactor;
uniform float uFogIntensity;
uniform float uWSpeed;
uniform float uWIntensity;

#define PI 3.14159265359
#define TWO_PI 6.28318530718

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 34.123);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float beamStrength(vec2 p, vec2 center, float power) {
  float d = distance(p, center);
  float falloff = 1.2;
  float f = power * falloff;
  float r = (f * f) / (d * d + 0.000001);
  return power * min(1.0, r);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 C = iResolution.xy * 0.5;
  float sc = 512.0 / iResolution.x * 0.4;
  vec2 uv = (fragCoord - C) * sc;
  
  float R_H = 150.0 * uHLenFactor;
  float R_V = 150.0 * uVLenFactor;
  
  // Horizontal beam
  float a = 0.0;
  float basePhase = 1.5 * PI;
  float decay = 1.1;
  float tauMin = basePhase - decay;
  float tauMax = basePhase;
  
  float cx = clamp(uv.x / R_H, -1.0, 1.0);
  float tH = clamp(TWO_PI - acos(cx), tauMin, tauMax);
  
  for(int k = -6; k <= 6; ++k) {
    float tu = tH + float(k) * 0.0038;
    if(tu < tauMin || tu > tauMax) continue;
    
    float spd = max(abs(sin(tu)), 0.02);
    float u = clamp((basePhase - tu) / max(decay, 0.000001), 0.0, 1.0);
    float env = pow(1.0 - abs(u * 2.0 - 1.0), 0.8);
    
    vec2 p = vec2(R_H * cos(tu), 0.0);
    a += beamStrength(uv, p, env * spd);
  }
  
  // Vertical beam with flow
  float b = 0.0;
  float yPix = uv.y;
  float cy = clamp(-yPix / R_V, -1.0, 1.0);
  float tV = clamp(TWO_PI - acos(cy), tauMin, tauMax);
  
  for(int k = -6; k <= 6; ++k) {
    float tu = tV + float(k) * 0.0038;
    if(tu < tauMin || tu > tauMax) continue;
    
    float yb = (-R_V) * cos(tu);
    float s = clamp(yb / R_V, 0.0, 1.0);
    float spd = max(abs(sin(tu)), 0.02);
    float env = pow(1.0 - s, 0.6) * spd;
    
    // Flow animation
    float flowPeriod = 0.5;
    float ph = s / max(flowPeriod, 0.000001) + iTime * uFlowSpeed;
    float tri = 1.0 - abs(fract(ph) * 2.0 - 1.0);
    float fl = pow(tri, 1.5);
    env *= mix(0.75, 1.0, fl);
    
    // Flare effect
    float flareHeight = 16.0;
    float yp = (-R_V) * cos(tu);
    float m = pow(smoothstep(flareHeight, 0.0, yp), 2.0);
    float wx = 1.0 + 8.0 * m;
    
    vec2 sig = vec2(wx, 1.0);
    vec2 p = vec2(0.0, yp);
    float mask = step(0.0, yp);
    
    vec2 d = uv - p;
    float dd = (d.x * d.x) / (sig.x * sig.x) + (d.y * d.y) / (sig.y * sig.y);
    float f = 1.2;
    float r = (f * f) / (dd + 0.000001);
    b += mask * env * min(1.0, r);
  }
  
  // Wisps
  float w = 0.0;
  float wispCell = 20.0;
  float yf = (yPix + iTime * uWSpeed) / wispCell;
  
  for(int lane = 0; lane < 3; ++lane) {
    float off = 1.5 + float(lane) * 0.25;
    float xc = off;
    float dx = abs(uv.x - xc);
    float lat = 1.0 - smoothstep(0.01, 0.01 + 0.15, dx);
    
    float ci = floor(yf);
    float fy = fract(yf);
    float seg = mix(0.01, 0.55, hash21(vec2(ci, off)));
    float segMask = smoothstep(0.0, 0.15, fy) * (1.0 - smoothstep(seg, seg + 0.15, fy));
    
    w += lat * segMask * exp(-off * 0.5);
  }
  
  w *= uWIntensity * uWispDensity;
  
  // Fog
  float fog = 0.0;
  vec2 fuv = uv * 0.3;
  fuv += iTime * 0.6 * vec2(0.0, 1.0);
  float n = noise(fuv + vec2(noise(fuv + vec2(7.3, 2.1)), noise(fuv + vec2(-3.7, 5.9))) * 0.6);
  n = pow(clamp(n, 0.0, 1.0), 1.2);
  
  float beamMask = smoothstep(0.0, 0.75, a + b);
  fog = n * uFogIntensity * beamMask;
  
  // Combine
  float L = a + b;
  float final = L + fog + w * 0.5;
  
  vec3 col = final * uColor;
  col *= uFade;
  
  float alpha = clamp(final * uFade, 0.0, 1.0);
  fragColor = vec4(col, alpha);
}

void main() {
  vec4 fc;
  mainImage(fc, gl_FragCoord.xy);
  gl_FragColor = fc;
}`

export const LaserFlow: React.FC<LaserFlowProps> = ({
  className,
  style,
  color = "#2563eb",
  wispDensity = 1.0,
  flowSpeed = 0.35,
  verticalSizing = 2.0,
  horizontalSizing = 0.5,
  fogIntensity = 0.45,
  wispSpeed = 15.0,
  wispIntensity = 5.0,
  enableParallax = true,
  parallaxSpeed = 0.3,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const mount = mountRef.current!
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    })
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    
    const canvas = renderer.domElement
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.display = "block"
    mount.appendChild(canvas)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
        3
      )
    )

    const hexToRGB = (hex: string) => {
      let c = hex.trim()
      if (c[0] === "#") c = c.slice(1)
      if (c.length === 3) c = c.split("").map((x) => x + x).join("")
      const n = Number.parseInt(c, 16) || 0x2563eb
      return {
        r: ((n >> 16) & 255) / 255,
        g: ((n >> 8) & 255) / 255,
        b: (n & 255) / 255,
      }
    }

    const rgb = hexToRGB(color)
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(1, 1, 1) },
      uColor: { value: new THREE.Vector3(rgb.r, rgb.g, rgb.b) },
      uFade: { value: 0 },
      uWispDensity: { value: wispDensity },
      uFlowSpeed: { value: flowSpeed },
      uVLenFactor: { value: verticalSizing },
      uHLenFactor: { value: horizontalSizing },
      uFogIntensity: { value: fogIntensity },
      uWSpeed: { value: wispSpeed },
      uWIntensity: { value: wispIntensity },
    }

    const material = new THREE.RawShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.frustumCulled = false
    scene.add(mesh)

    const clock = new THREE.Clock()
    let fade = 0

    const setSizeNow = () => {
      const w = mount.clientWidth || 1
      const h = mount.clientHeight || 1
      const pr = Math.min(window.devicePixelRatio || 1, 2)
      renderer.setPixelRatio(pr)
      renderer.setSize(w, h, false)
      uniforms.iResolution.value.set(w * pr, h * pr, pr)
    }

    setSizeNow()
    
    const ro = new ResizeObserver(setSizeNow)
    ro.observe(mount)

    // Parallax scroll handler
    const handleScroll = () => {
      if (!enableParallax) return;
      
      const rect = mount.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      // Calculate parallax offset
      const offset = (scrolled - elementTop + windowHeight) * parallaxSpeed;
      setParallaxOffset(offset);
      
      // Adjust flow speed based on scroll
      const scrollProgress = Math.min(scrolled / (document.documentElement.scrollHeight - windowHeight), 1);
      uniforms.uFlowSpeed.value = flowSpeed * (1 + scrollProgress * 0.5);
      uniforms.uFogIntensity.value = fogIntensity * (1 + scrollProgress * 0.3);
    };

    if (enableParallax) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    let raf = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      uniforms.iTime.value = t
      
      fade = Math.min(1, fade + 0.02)
      uniforms.uFade.value = fade
      
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      if (enableParallax) {
        window.removeEventListener('scroll', handleScroll);
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (mount.contains(canvas)) mount.removeChild(canvas)
    }
  }, [color, wispDensity, flowSpeed, verticalSizing, horizontalSizing, fogIntensity, wispSpeed, wispIntensity, enableParallax, parallaxSpeed])

  return (
    <div 
      ref={mountRef} 
      className={`w-full h-full ${className || ""}`} 
      style={{
        ...style,
        transform: enableParallax ? `translateY(${parallaxOffset * 0.1}px)` : undefined,
        transition: 'transform 0.1s linear',
      }} 
    />
  )
}
