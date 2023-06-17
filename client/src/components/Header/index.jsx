import React, {useEffect, useState} from 'react';

const Header = () => {

    const [bgColor, setBgColor] = useState('');
    const [textColor, setTextColor] = useState('text-white');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBgColor('bg-white dark:bg-gray-900');
                setTextColor('text-black dark:text-white');
            } else {
                setBgColor('bg-transparent');
                setTextColor('text-white');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id='header' className={`fixed flex justify-between items-center ${bgColor} top-0 left-0 w-full h-16 z-50 px-10 max-lg:bg-white max-lg:dark:bg-gray-900`}>
                <div className='text-primary dark:text-secondary text-2xl'>
                    Gokul Abisheak
                </div>
                <div className={`hidden lg:flex text-base space-x-8 ${textColor}`}>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#project'>Project</a>
                    <a href='#contact'>Contact</a>
                </div>
            </div>
        </>
    );
}

export default Header;
