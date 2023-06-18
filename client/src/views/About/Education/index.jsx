import React from 'react';
import SLIIT from '../../../assets/SLIIT_Crest.png'
import Trinity from '../../../assets/Trinity_Crest.png'

const Education = () => {
    return (
        <>
            <div id='education' className='flex flex-col items-center min-h-screen bg-neutral-50 dark:bg-gray-900 pt-20'>
                <h1 className='text-4xl lexend-bold text-primary dark:text-secondary mb-8'>
                    Education
                </h1>
                <div className='flex flex-col md:flex-row items-center text-center'>
                    <div className='flex flex-col items-center bg-neutral-50 dark:bg-gray-800 text-neutral-950 dark:text-neutral-50 p-5 mx-8 my-4 new-shadow-xl' style={{ width: '300px', height: '500px' }}>
                        <img src={SLIIT} style={{ width: 'auto', height: '200px' }} />
                        <div className='lexend-bold h-16 mt-4'>
                            Sri Lankan Institute of Information Technology
                        </div>
                        <div className='lexend-light h-16'>
                            2021 - Present
                        </div>
                        <div className='lexend-light'>
                            BSc (Hons) in Information Technology Specialising in Software Engineering
                        </div>
                    </div>
                    <div className='flex flex-col items-center bg-neutral-50 dark:bg-gray-800 text-neutral-950 dark:text-neutral-50 p-5 mx-8 my-4 new-shadow-xl' style={{ width: '300px', height: '500px' }}>
                        <img src={Trinity} style={{ width: 'auto', height: '200px' }} />
                        <div className='lexend-bold h-16 mt-4'>
                            Trinity College Kandy
                        </div>
                        <div className='lexend-light h-16'>
                            2007 - 2020
                        </div>
                        <div className='lexend-light'>
                            General Certificate of Education (Advanced Level) - Physical Science
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
