import { useEffect, useState } from "react";

interface TextCarouselProps {
  text: string;
}

export const TextCarousel = ({ text }: TextCarouselProps) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev <= -100 ? 0 : prev - 0.5));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div
        className="inline-flex gap-10 transition-transform duration-300"
        style={{ transform: `translateX(${position}%)` }}
      >
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="text-white font-montserrat font-bold text-[56px] leading-[72px]"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
