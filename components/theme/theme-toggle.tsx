'use client';

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme/theme-provider";

interface ThemeToggleProps {
  size?: "sm" | "md";
}

export function ThemeToggle({ size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure we only render theme-dependent styles after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";
  const buttonSize = size === "sm" ? 32 : 36;
  const buttonRadius = size === "sm" ? 8 : 18;
  const iconSize = size === "sm" ? 16 : 18;

  // Use consistent initial state for SSR
  const moonOpacity = mounted ? (isDark ? 1 : 0) : 0;
  const moonScale = mounted ? (isDark ? 1 : 0.5) : 0.5;
  const moonRotate = mounted ? (isDark ? 0 : 180) : 180;
  const sunOpacity = mounted ? (isDark ? 0 : 1) : 1;
  const sunScale = mounted ? (isDark ? 0.5 : 1) : 1;
  const sunRotate = mounted ? (isDark ? -180 : 0) : 0;

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center cursor-pointer overflow-hidden"
      style={{ width: buttonSize, height: buttonSize, borderRadius: buttonRadius }}
      whileHover={{ backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)" }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      aria-label="Toggle theme"
      type="button"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ opacity: moonOpacity, scale: moonScale, rotate: moonRotate }}
        transition={{ duration: mounted ? 0.3 : 0, ease: "easeInOut" }}
      >
        <Moon style={{ width: iconSize, height: iconSize, color: "rgba(255, 255, 255, 0.85)" }} />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ opacity: sunOpacity, scale: sunScale, rotate: sunRotate }}
        transition={{ duration: mounted ? 0.3 : 0, ease: "easeInOut" }}
      >
        <Sun style={{ width: iconSize, height: iconSize, color: "rgba(0, 0, 0, 0.85)" }} />
      </motion.div>
    </motion.button>
  );
}
