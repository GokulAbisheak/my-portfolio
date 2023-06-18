import React from 'react';
import SkillData from '../../data/SkillData';

const Skills = () => {
    return (
        <>
            <div id='skills' className='flex flex-col items-center min-h-screen bg-neutral-50 dark:bg-gray-900 pt-20'>
                <h1 className='text-4xl lexend-bold text-primary dark:text-secondary mb-8'>
                    Skills
                </h1>
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 justify-center items-center text-center text-neutral-950 dark:text-neutral-50'>
                    {SkillData.map((item) => (
                        <div className='m-4'>
                            <div className='w-24 h-24 rounded-full bg-neutral-100 flex items-center justify-center dark:bg-gray-800 mb-2 new-shadow-md'>
                                <img src={item.image} className='contain' style={{ maxWidth: '60%', maxHeight: '60%' }} />
                            </div>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Skills;
