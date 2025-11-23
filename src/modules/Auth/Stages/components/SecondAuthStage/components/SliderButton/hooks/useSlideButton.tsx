import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGetPrivateKey } from "../api/query/getPrivateKey";

export const useSlideButton = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [dragPosition, setDragPosition] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const { data: privateKey } = useGetPrivateKey({ enabled: isRevealed });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !sliderRef.current || !buttonRef.current) return;
      const padding = 5;

      const sliderRect = sliderRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const maxPosition = sliderRect.width - buttonRect.width - padding * 2;

      const newPosition = Math.min(
        maxPosition + padding,
        e.clientX - sliderRect.left - buttonRect.width / 2,
      );
      setDragPosition(newPosition);

      if (newPosition >= maxPosition * 0.8 && !isRevealed) {
        setIsRevealed(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDragging],
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  return {
    isDragging,
    dragPosition,
    sliderRef,
    buttonRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    privateKey,
  };
};
