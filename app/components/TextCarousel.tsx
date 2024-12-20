import { useEffect, useState } from "react";

interface TextCarouselProps {
  text: string;
}

export const TextCarousel = ({ text }: TextCarouselProps) => {
  const [position, setPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize and check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const scrollSpeed = isMobile ? 0.25 : 0.5;
        const resetPoint = isMobile ? -150 : -100;
        return prev <= resetPoint ? 0 : prev - scrollSpeed;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div
        className="flex gap-6 md:gap-10 transition-transform duration-500 ease-linear will-change-transform"
        style={{ transform: `translateX(${position}%)` }}
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="flex-none text-white font-montserrat font-bold text-2xl md:text-[56px] leading-normal md:leading-[72px]"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
