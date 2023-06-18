import React from 'react';
import Portrait from '../../../assets/portrait.jpg'

const Introduction = () => {
    return (
        <>
            <div className='flex flex-col items-center min-h-screen bg-white dark:bg-gray-900 pt-20'>
                <h1 className='text-4xl lexend-bold text-primary dark:text-secondary mb-8'>
                    About Me
                </h1>
                <div className='rounded-full overflow-hidden' style={{ width: '250px', height: '250px' }}>
                    <img src={Portrait} className='w-full h-full object-cover object-center' />
                </div>
                <div style={{ maxWidth: '500px' }} className='mt-8 text-center text-black dark:text-white'>
                    Hey! My name is Gokul Abisheak. I'm a software engineering undergraduate at Sri Lankan Institute of Information Technology (SLIIT). My passion towards software development started at a very young age, I'd love to be a full-stack developer. I love to learn about new technologies, Currently I'm learning about Cloud Computing.
                </div>
                <a href='#education'>
                    <button className='text-white bg-gradient-to-r from-primary to-secondary mt-2 px-10 py-4 rounded uppercase mt-8'>
                        Know More About Me
                    </button>
                </a>
            </div>
        </>
    );
}

export default Introduction;
