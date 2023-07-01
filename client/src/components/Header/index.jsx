import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [bgColor, setBgColor] = useState('');
    const [textColor, setTextColor] = useState('text-neutral-50');
    const [shadow, setShadow] = useState('')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setBgColor('bg-neutral-50 dark:bg-gray-900');
                setTextColor('text-neutral-950 dark:text-neutral-50');
                setShadow('new-shadow-xl');
            } else {
                setBgColor('bg-transparent');
                setTextColor('text-neutral-50');
                setShadow('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div id='header' className={`fixed flex justify-between items-center ${bgColor} top-0 left-0 w-full h-16 z-50 px-10 max-lg:bg-neutral-50 max-lg:dark:bg-gray-900 ${shadow}`}>
                <div className='text-primary dark:text-secondary text-2xl'>
                    Gokul Abisheak
                </div>
                <div className={`hidden lg:flex text-base space-x-8 ${textColor}`}>
                    <a href='#home' className='hover:scale-125 transition duration-200 ease-in-out'>Home</a>
                    <a href='#about' className='hover:scale-125 transition duration-200 ease-in-out'>About</a>
                    <a href='#skills' className='hover:scale-125 transition duration-200 ease-in-out'>Skills</a>
                    <a href='#project' className='hover:scale-125 transition duration-200 ease-in-out'>Project</a>
                    <a href='#contact' className='hover:scale-125 transition duration-200 ease-in-out'>Contact</a>

                </div>
                <div className='flex lg:hidden text-gray-900 dark:text-neutral-50 hover:text-primary dark:hover:text-secondary text-2xl'>
                    <button onClick={handleToggleMobileMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className='bg-neutral-200 dark:bg-gray-800 text-neutral-950 dark:text-neutral-50 lg:hidden fixed top-16 left-0 w-full z-50'>
                    <div className='flex flex-col items-center'>
                        <a className='block py-3 hover:text-primary dark:hover:text-secondary' href='#home'>Home</a>
                        <a className='block py-3 hover:text-primary dark:hover:text-secondary' href='#about'>About</a>
                        <a className='block py-3 hover:text-primary dark:hover:text-secondary' href='#skills'>Skills</a>
                        <a className='block py-3 hover:text-primary dark:hover:text-secondary' href='#project'>Project</a>
                        <a className='block py-3 hover:text-primary dark:hover:text-secondary' href='#contact'>Contact</a>
                    </div>
                </div>

            )}
        </>
    );
}

export default Header;
