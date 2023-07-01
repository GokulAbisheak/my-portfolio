import React from 'react';
import VolunteeringData from '../../../data/VolunteeringData';

const Volunteering = () => {
    return (
        <>
            <div id='volunteering' className='flex flex-col items-center min-h-screen bg-neutral-50 dark:bg-gray-900 pt-20'>
                <h1 className='text-4xl lexend-bold text-primary dark:text-secondary mb-8'>
                    Volunteering
                </h1>
                <div className='flex flex-col bg-neutral-50 dark:bg-gray-800 text-neutral-950 dark:text-neutral-50 border-2 border-primary dark:border-secondary new-shadow-xl mx-4'>
                    {VolunteeringData.map((list) => (
                        <div className='flex flex-row p-2 bg-neutral-50 dark:bg-gray-800 border-2 border-primary dark:border-secondary hover:scale-105 transition duration-200 ease-in-out' style={{maxWidth: '500px'}}>
                            <div className='mr-4 flex justify-center p-2' style={{width: '80px', height: '80px'}}>
                                <img src={list.image} className='object-contain' />
                            </div>
                            <div className='grow pr-4'>
                                <div>
                                    {list.position}
                                </div>
                                <div className='lexend-light'>
                                    {list.club}
                                </div>
                                <div className='lexend-light'>
                                    {list.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Volunteering;
