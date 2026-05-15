"use client";

import { ReactNode, useSyncExternalStore } from "react";

interface SmoothAnchorProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

const subscribe = (callback: (e: MediaQueryListEvent) => void) => {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback as EventListener);
  return () => mediaQuery.removeEventListener("change", callback as EventListener);
};

const getSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getServerSnapshot = () => false;

export default function SmoothAnchor({ href, children, className, onClick }: SmoothAnchorProps) {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) onClick();
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        if (reducedMotion) {
          targetElement.scrollIntoView();
          window.history.pushState(null, "", href);
        } else {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;
          let startTime: number | null = null;
          const duration = 1200;

          const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeProgress = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * easeProgress);

            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            } else {
              window.history.pushState(null, "", href);
            }
          };

          requestAnimationFrame(animation);
        }
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
