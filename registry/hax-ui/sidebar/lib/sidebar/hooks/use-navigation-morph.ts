'use client';

import { useState, useEffect, useCallback } from "react";

export function useNavigationMorph(contentSwitchDelay = 450) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showTabBarsContent, setShowTabBarsContent] = useState(false);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const collapse = useCallback(() => {
    setIsCollapsed(true);
  }, []);

  const expand = useCallback(() => {
    setIsCollapsed(false);
  }, []);

  useEffect(() => {
    if (isCollapsed) {
      const timer = setTimeout(() => {
        setShowTabBarsContent(true);
      }, contentSwitchDelay);
      return () => clearTimeout(timer);
    }

    setShowTabBarsContent(false);
  }, [isCollapsed, contentSwitchDelay]);

  return {
    isCollapsed,
    showTabBarsContent,
    toggleCollapse,
    collapse,
    expand,
  };
}
