import React from 'react';
import Colors from '../../../assets/colors_image.png'

const Honors = () => {
    return (
        <>
            <div id='honors' className='flex flex-col items-center min-h-screen bg-white dark:bg-gray-900 pt-20'>
                <h1 className='text-4xl lexend-bold text-primary dark:text-secondary mb-8'>
                    Honors and Awards
                </h1>
                <div className='flex flex-row drop-shadow-xl bg-neutral-50 dark:bg-gray-800 p-5 mx-4 shadow-xl' style={{ maxWidth: '500px', backgroundImage: `url(${Colors})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>
                    <div className='z-10'>
                        <div className='text-secondary lexend-bold'>
                            Colours Award 2022 - Track and Field
                        </div>
                        <div className='text-white lexend-light'>
                            Issued by Sports Council of SLIIT
                        </div>
                        <div className='text-white lexend-light'>
                            March 2023
                        </div>
                        <div className='text-white lexend-light mt-24'>
                            Awarded Colours by SLIIT for Loyalty and Performance in Track and Field for the year 2022.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Honors;
