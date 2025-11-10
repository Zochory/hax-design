import { Transition } from "motion/react";

export const MORPH_TIMING = {
  contentSwitchDelay: 450,
  sidebarExitDuration: 0.2,
  sidebarEnterDuration: 0.3,
  sidebarEnterDelay: 0.1,
  tabBarsEnterDuration: 0.25,
  tabBarsEnterDelay: 0,
  shadowDuration: 0.5,
  scaleDuration: 0.6,
} as const;

export const MORPH_SCALE_VALUES = {
  collapse: [1, 0.98, 1] as [number, number, number],
  expand: [1, 1.01, 1] as [number, number, number],
} as const;

export const MORPH_TRANSITION = {
  container: {
    type: "spring" as const,
    stiffness: 260,
    damping: 28,
    mass: 0.6,
  },
  position: {
    type: "spring" as const,
    stiffness: 300,
    damping: 32,
    mass: 0.5,
  },
  sidebarContentExit: {
    duration: MORPH_TIMING.sidebarExitDuration,
    ease: [0.4, 0, 1, 1],
  } as Transition,
  sidebarContentEnter: {
    duration: MORPH_TIMING.sidebarEnterDuration,
    delay: MORPH_TIMING.sidebarEnterDelay,
    ease: [0, 0, 0.2, 1],
  } as Transition,
  tabBarsContentEnter: {
    duration: MORPH_TIMING.tabBarsEnterDuration,
    delay: MORPH_TIMING.tabBarsEnterDelay,
    ease: [0, 0, 0.2, 1],
  } as Transition,
  scale: {
    duration: MORPH_TIMING.scaleDuration,
    ease: [0.34, 1.56, 0.64, 1],
  } as Transition,
  shadow: {
    duration: MORPH_TIMING.shadowDuration,
    ease: "easeInOut" as const,
  } as Transition,
  staggerChildren: 0.05,
  itemExitDuration: 0.2,
  itemEnterDuration: 0.3,
} as const;
