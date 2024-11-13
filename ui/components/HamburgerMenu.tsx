'use client'
import { useRef, useState } from 'react';
import ClickOutside from './ClickOutside';

interface HamburgerIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
  insideRef?: React.RefObject<HTMLButtonElement>;
}

export const HamburgerIcon = ({ isOpen, toggleMenu, insideRef }: HamburgerIconProps) => {
  return (
    <button onClick={toggleMenu} ref={insideRef} className="relative w-fit h-fit z-10 ">
      {/* Hamburger SVG */}
      <svg
        width="15"
        height="10"
        viewBox="0 0 46 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-10 w-8 md:w-10 transition-all duration-300 ease-in-out ${isOpen ? 'open' : ''}`}
      >
        <rect
          y="0.329399"
          width="45"
          height="2.5"
          fill="currentColor"
          className="transition-all duration-300 origin-center"
        />
        <rect
          y="28.3294"
          width="45"
          height="2.5"
          fill="currentColor"
          className="transition-all duration-300 origin-center"
        />
        <rect
          x="12.606"
          y="14.3294"
          width="31"
          height="2.5"
          fill="currentColor"
          className="transition-all duration-300 origin-center"
        />
      </svg>

      {/* Tailwind Styles for the Animation */}
      <style jsx>{`
        .open rect:nth-child(1) {
          transform: translate(0px,9px) rotate(45deg);
        }
        .open rect:nth-child(2) {
          transform: translate(-8px, -12px) rotate(-45deg);
        }
        .open rect:nth-child(3) {
          opacity: 0;
        }
      `}</style>
    </button>
  );
};

const HamburgerToXMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="relative">
      <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} insideRef={buttonRef} />

      {isOpen && (
        <ClickOutside
          exceptionRef={buttonRef}  // Pass buttonRef as exceptionRef
          onClick={toggleMenu}
          className="h-svh w-svw absolute left-0 p-4 bg-yellow-500 top-[-0.5rem] 
        md:left-[60%] lg:left-[67%] xl:left-[75%] 2xl:left-[79%] 
        md:w-[20rem] md:h-[inherit]"
        >
          <div className="h-fit">
            {/* Your box content here */}
            <ul>
              <li className="py-2 px-4">Item 1</li>
              <li className="py-2 px-4">Item 2</li>
              <li className="py-2 px-4">Item 3</li>
              <li className="py-2 px-4">Item 4</li>
            </ul>
          </div>
        </ClickOutside>
      )}
    </div>
  );
};

export default HamburgerToXMenu;
