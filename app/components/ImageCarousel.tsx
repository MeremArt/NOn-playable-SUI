import { useEffect, useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
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
        // Adjust scroll speed and reset point based on screen size
        const scrollSpeed = isMobile ? 0.75 : 0.5;
        const resetPoint = isMobile ? -200 : -100;
        return prev <= resetPoint ? 0 : prev - scrollSpeed;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="h-full w-full">
      <div
        className="inline-flex gap-3 md:gap-6 transition-transform duration-300"
        style={{ transform: `translateX(${position}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          >
            <div className="bg-white w-full h-full  rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={src}
                alt=""
                className="w-full h-full md:w-[234px] md:h-[234px] object-cover rounded-lg md:rounded-xl"
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
