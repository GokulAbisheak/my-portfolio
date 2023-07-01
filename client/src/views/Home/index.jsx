import React from 'react';
import HomeSVG from '../../assets/home.png'
import CV from '../../assets/Gokul_Abisheak_Resume.pdf'

const Home = () => {
    return (
        <>
            <div id='home' className='grid grid-cols-1 lg:grid-cols-2 w-100 min-h-screen bg-neutral-50 dark:bg-gray-900'>
                <div className='flex items-center justify-start'>
                    <div className='flex flex-row'>
                        <div className='m-10'>
                            <div className='text-5xl dark:text-neutral-50 mb-2'>
                                Hey! I'm
                            </div>
                            <div className='text-5xl text-primary dark:text-secondary mb-2'>
                                Gokul Abisheak
                            </div>
                            <div className='text-2xl dark:text-neutral-50 mb-2'>
                                Software Engineering Undergraduate at SLIIT
                            </div>
                            <a href={CV} download='Gokul-Abisheak-Srirajan-CV'>
                                <button className='text-neutral-50 bg-gradient-to-r from-primary to-secondary mt-2 px-10 py-4 rounded hover:scale-110 transition duration-200 ease-in-out'>
                                    DOWNLOAD CV
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-full order-first lg:order-last'>
                    <img src={HomeSVG} className='w-full sm:w-1/2 lg:w-full float-right' />
                </div>
            </div>
        </>
    );
}

export default Home;
