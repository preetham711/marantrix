import { cn } from "@/lib/utils";
import {
  Globe,
  Smartphone,
  Palette,
  MessageCircle,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Website",
      description: "Custom design to improve your business.",
      icon: <Globe />,
    },
    {
      title: "Mobile App",
      description: "Mobile application for your business.",
      icon: <Smartphone />,
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and modern UI/UX design for your Application.",
      icon: <Palette />,
    },
    {
      title: "Consulting",
      description: "On call support to design your application.",
      icon: <MessageCircle />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        index === 0 && "lg:border-l border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      
      <div className="mb-4 relative z-10 px-10 text-blue-400 group-hover/feature:text-cyan-400 transition-colors duration-200">
        <div className="w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-gradient-to-b group-hover/feature:from-blue-500 group-hover/feature:to-cyan-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 group-hover/feature:text-neutral-200 max-w-xs relative z-10 px-10 transition-colors duration-200">
        {description}
      </p>
    </div>
  );
};