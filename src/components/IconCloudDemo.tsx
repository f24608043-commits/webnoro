import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "express",
  "postgresql",
  "firebase",
  "docker",
  "amazonaws",
  "vercel",
  "github",
  "figma",
  "mongodb",
  "tailwindcss",
  "python",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 mx-auto">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
