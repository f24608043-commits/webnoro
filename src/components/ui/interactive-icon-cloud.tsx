"use client";

import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon, type SimpleIcon, type ICloud } from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native" as const,
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, isDarkMode: boolean) => {
  const bgHex = isDarkMode ? "#1a1613" : "#faf9f8";
  const fallbackHex = isDarkMode ? "#ff8a6a" : "#ff6b47";
  const minContrastRatio = isDarkMode ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  });
};

export type IconCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: IconCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, isDarkMode)
    );
  }, [data, isDarkMode]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}
