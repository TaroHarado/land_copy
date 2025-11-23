"use client";

import { useEffect, useRef } from "react";

export function usePaginationScroll(
  callback: () => void,
  options?: IntersectionObserverInit,
  enabled: boolean = true
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [callback, enabled, options]);

  return ref;
}
