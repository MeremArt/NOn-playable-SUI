import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", section: "home" },
    { name: "LINKS", section: "links" },
    { name: "$NPSUI", section: "style" },
    { name: "HOW TO BUY", section: "how-to-buy" },
    { name: "FOOTER", section: "footer" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: string
  ) => {
    e.preventDefault();
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="px-6 md:px-20 flex items-center justify-between text-black relative">
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734725124/WhatsApp_Image_2024-12-18_at_20.54.03_3_1_wv4kjt.png"
            alt="Logo"
            width={58}
            height={94}
            className="w-[48px] h-[74px] md:w-[58px] md:h-[74px]"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={(e) => handleNavClick(e, link.section)}
              className="hover:opacity-80 font-bold font-fredoka text-xl"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:opacity-80"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white md:hidden z-50 shadow-lg">
            <div className="flex flex-col items-center py-4">
              {navLinks.map((link) => (
                <a
                  key={link.section}
                  href={`#${link.section}`}
                  onClick={(e) => handleNavClick(e, link.section)}
                  className="w-full py-3 text-center hover:bg-gray-50 font-bold font-fredoka text-xl"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="h-1 md:h-[2px] bg-[#333333] w-full" />
    </>
  );
};

export default Navigation;
