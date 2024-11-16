'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import ClickOutside from '../components/ClickOutside';
import { HamburgerIcon } from '../components/HamburgerMenu';
import Image from 'next/image';
import Button from '../Button';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const insideRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className="w-full z-50">
      <motion.div
        className={`font-poppins fixed top-0 left-1/2  transform -translate-x-1/2 w-full  transition-all duration-300 ease-in-out flex justify-center ${isScrolled
          ? 'bg-white text-gray-500 ' // glass-like when scrolled
          : 'md:text-gray-500 text-gray-500' // Less opaque when at top
          } dark:bg-opacity-75`}
        initial={{ y: -10, x: '-20%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <div className='w-full md:w-[80%] p-4 md:p-6 flex flex-row justify-between items-center'>
          <div><Link href='/'><Image src={!isScrolled ? '/assets/tc_logo_Primary.png' : '/assets/tc_logo_Primary.png'} alt='logo' height={30} width={100} /></Link></div>

          <div className='hidden md:block'>
            <ul className='flex justify-between gap-4 md:text-base font-semibold text-gray-500 '>
              <Link href="/pricing" className={`${!isScrolled ? 'hover:text-gray-800' : 'hover:text-slate-700 hover:text-opacity-70'}   transform transition duration-200`}>Pricing</Link>
              <Link href="/blog" className={`${!isScrolled ? 'hover:text-gray-800' : 'hover:text-slate-700 hover:text-opacity-70'}   transform transition duration-200`}>Blog</Link>
              {/* <Link href="#pricing" className={`${!isScrolled ? 'hover:text-white/65' : 'hover:text-slate-700 hover:text-opacity-70'}   transform transition duration-200`}>Support</Link> */}
            </ul>
          </div>
          <div className='hidden md:flex md:flex-row md:gap-4'>
            <Button label='Sign In' variant='borderless' onClick={() => router.push('/signin')}/>
            <Button label='Get Started' className='py-2' onClick={() => router.push('/signup')}/>

          </div>
          <div className='md:hidden text-gray-500'>
            <HamburgerIcon toggleMenu={toggleMenu} isOpen={isOpen} insideRef={insideRef} />
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0, transformOrigin: 'top right' }}   // Start with no height and opacity
                animate={{ opacity: 1, scaleY: 1 }}                                // Gradually expand height and increase opacity
                exit={{ opacity: 0, scaleY: 0 }}                                   // Shrink height and reduce opacity on exit
                transition={{ duration: 0.3, ease: 'easeInOut' }}                  // Smooth transition
                className="absolute bg-white top-0 right-0 w-full md:w-[24rem] shadow-xl"
              >
                <ClickOutside exceptionRef={insideRef}
                  onClick={toggleMenu}
                  className=" "
                >
                  <div className='mt-[2rem] p-8'>
                    <ul className='flex flex-col gap-6 text-lg text-primaryVariant'>
                      {['Get Started','Pricing', 'Blog', 'Twitter X'].map((item, index) => {
                        // Determine the href based on whether it's a page or an internal section
                        const href =
                          item === 'Skills' ? '/#skills' :
                            item === 'About me' ? '/#about-me' :
                              item === 'Contact me' ? '/#contact-me' :
                                `/${item.toLowerCase().replace(' ', '-')}`;

                        return (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}  // Start with opacity 0 and below its position
                            animate={{ opacity: 1, y: 0 }}   // Fade in and slide to position
                            exit={{ opacity: 0, y: 20 }}     // Exit animation: fade out and move down slightly
                            transition={{
                              duration: 0.25,
                              ease: 'easeInOut',
                              delay: index * 0.05,  // Slight stagger for each item
                            }}
                            className="relative group hover:cursor-pointer"
                          >
                            <Link href={href} scroll={item !== 'Projects' && item !== 'Articles'}>
                              {item}
                            </Link>

                            {/* Border element */}
                            <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-primary transition-all duration-300 ease-in-out group-hover:w-[20%]"></span>
                          </motion.li>
                        );
                      })}

                    </ul>
                  </div>
                </ClickOutside>
              </motion.div>


            )

            }
          </div>




        </div>

      </motion.div>

    </nav>
  )
}

export default Navbar
