import React from 'react';
import EducationData from '../../../data/EducationData';

const Education = () => {
    return (
        <>
            <div id='education' className='flex flex-col items-center min-h-screen bg-neutral-50 dark:bg-gray-900 pt-20'>
                <h1 className='text-4xl lexend-bold text-primary dark:text-secondary mb-8'>
                    Education
                </h1>
                <div className='flex flex-col md:flex-row items-center text-center'>
                    {EducationData.map((item) => (
                        <div className='flex flex-col items-center bg-neutral-50 dark:bg-gray-800 text-neutral-950 dark:text-neutral-50 p-5 mx-8 my-4 new-shadow-xl border-2 border-primary dark:border-secondary' style={{ width: '300px', height: '500px' }}>
                            <img src={item.image} style={{ width: 'auto', height: '200px' }} />
                            <div className='lexend-bold h-16 mt-4'>
                                {item.name}
                            </div>
                            <div className='lexend-light h-16'>
                                {item.duration}
                            </div>
                            <div className='lexend-light'>
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Education;
