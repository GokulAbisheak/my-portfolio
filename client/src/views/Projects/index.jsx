import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLink, faStar } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {

    const [repo, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const res = await fetch(`https://api.github.com/users/GokulAbisheak/repos?page=1&per_page=12&sort=created`);
            const data = await res.json()
            setRepos(data);
        }
        fetchRepos();
    }, [])

    return (
        <>
            <div id='project' className='flex flex-col items-center min-h-screen bg-neutral-50 dark:bg-gray-900 pt-20'>
                <h1 className='text-4xl lexend-bold text-primary dark:text-secondary mb-8'>
                    Project
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                    {repo.map((item) => (
                        <div className='w-96 bg-neutral-100 dark:bg-gray-800 text-neutral-900 dark:text-neutral-50 m-4 p-5 new-shadow-md'>
                            <div className='lexend-bold flex items-center mb-4'>
                                <div className='h-10 w-10 rounded-full overflow-hidden mr-4'>
                                    <img src={item.owner.avatar_url} className='contain' />
                                </div>
                                {item.owner.login}
                            </div>
                            <div className='lexend-light mb-4'>
                                {item.name}
                                <a href={item.html_url} className='ml-2'>
                                    <FontAwesomeIcon className='text-neutral-900 dark:text-neutral-50' icon={faLink} />
                                </a>
                                <span className={'float-right px-4 py-1 text-white rounded-full text-sm capitalize ' + (item.visibility == 'public' ? 'bg-lime-600' : 'bg-red-700')}>
                                    {item.visibility}
                                </span>
                            </div>
                            <div className='lexend-light'>
                                <FontAwesomeIcon className='text-amber-400' icon={faStar} /> Stars - {item.stargazers_count}
                            </div>
                            <div className='lexend-light'>
                                <FontAwesomeIcon className='text-sky-600' icon={faEye} /> Watchers - {item.watchers_count}
                            </div>
                            <div className='mt-4'>
                                {item.language != null ? <span className='lexend-bold text-sm bg-primary dark:bg-secondary px-2 py-1 rounded-full text-neutral-50'>
                                    {item.language}
                                </span> : ''}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
