import ThemeSwitch from "@/components/ui/theme-switch";

export default function ThemeSwitchDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-foreground">Theme Switch Demo</h1>
        <p className="text-muted-foreground">Toggle between light and dark mode</p>
        <ThemeSwitch />
      </div>
    </div>
  );
}
