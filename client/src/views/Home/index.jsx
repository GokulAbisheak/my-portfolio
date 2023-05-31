import React from 'react';
import HomeSVG from '../../assets/home.png'
import CV from '../../assets/Gokul_Abisheak_Resume.pdf'

const Home = () => {
    return (
        <>
            <div id="home" className='flex items-center justify-start w-100 min-h-screen dark:bg-gray-900'
                style={{ backgroundImage: `url(${HomeSVG})`, backgroundSize: 'auto 110vh', backgroundRepeat: 'no-repeat', backgroundPositionX: 'right', backgroundPositionY: 'top' }}>
                <div className='hidden flex-row lg:flex'>
                    <div className='m-10'>
                        <div className='text-5xl dark:text-white mb-2'>
                            Hey! I'm
                        </div>
                        <div className='text-5xl text-primary dark:text-secondary mb-2'>
                            Gokul Abisheak
                        </div>
                        <div className='text-2xl dark:text-white mb-2'>
                            Software Engineering Undergraduate at SLIIT
                        </div>
                        <a href={CV} download='Gokul-Abisheak-Srirajan-CV'>
                            <button className='text-white bg-gradient-to-r from-primary to-secondary mt-2 px-10 py-4 rounded'>
                                DOWNLOAD CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-start w-100 min-h-screen dark:bg-gray-900 lg:hidden'>
                <div className='flex flex-row'>
                    <div className='m-10'>
                        <div className='text-5xl dark:text-white mb-2'>
                            Hey! I'm
                        </div>
                        <div className='text-5xl text-primary dark:text-secondary mb-2'>
                            Gokul Abisheak
                        </div>
                        <div className='text-2xl dark:text-white'>
                            Software Engineering Undergraduate at SLIIT
                        </div>
                        <a href={CV} download='Gokul-Abisheak-Srirajan-CV'>
                            <button className='text-white bg-gradient-to-r from-primary to-secondary mt-2 px-10 py-4 rounded'>
                                DOWNLOAD CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
