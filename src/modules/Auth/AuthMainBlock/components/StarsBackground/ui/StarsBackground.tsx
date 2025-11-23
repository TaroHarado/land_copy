import { FC, useMemo } from "react";

// Простая функция для генерации псевдослучайных чисел
const random = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const StarsBackground: FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => {
      const seed = i;
      const size = random(seed * 7.3) * 3 + 1;
      const left = random(seed * 3.7) * 100;
      const top = random(seed * 5.1) * 100;
      const delay = random(seed * 11.3) * 3;
      const duration = random(seed * 13.7) * 3 + 2;
      const opacity = random(seed * 17.1) * 0.8 + 0.2;

      return {
        size,
        left,
        top,
        delay,
        duration,
        opacity,
      };
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="animate-twinkle absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};
