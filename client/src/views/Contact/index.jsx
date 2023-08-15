import React, { useRef, useState } from 'react';
import ContactData from '../../data/ContactData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import { Alert, Snackbar } from '@mui/material';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

const Contact = () => {

    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [error, setError] = useState({});

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateInput() == false) {
            return
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setOpen(true)
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleClose = () => {
        setOpen(false)
    }

    const validateInput = () => {
        let errors = {};

        if (email == '') {
            errors.email = 'Email field cannot be empty'
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            errors.email = 'Please enter a valid email'
        } else if (name == '') {
            errors.name = 'Name field cannot be empty'
        } else if (message == '') {
            errors.message = 'Message field cannot be empty'
        }

        setError(errors);

        if (errors.email == null && errors.name == null && errors.message == null) {
            return true
        } else {
            return false
        }
    }

    return (
        <>
            <div id='contact' className='flex flex-col items-center min-h-screen bg-neutral-50 dark:bg-gray-900 pt-20'>
                <h1 className='text-4xl font-semibold text-primary dark:text-secondary mb-8'>
                    Contact
                </h1>
                <div className='grid grid-cols-4'>
                    {ContactData.map((item) => (
                        <a href={item.link} target="_blank">
                            <div className='p-4 text-center text-neutral-900 dark:text-neutral-50 hover:scale-125 transition ease-in-out duration-200'>
                                {<FontAwesomeIcon icon={item.icon} className='mx-4 mb-2 text-4xl' />}
                                <br />
                                <div className='text-sm'>{item.name}</div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className='flex flex-col text-sm text-neutral-900 dark:text-neutral-50 w-full max-w-xl p-4'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' placeholder='Your Email' name='from_email' className='w-full p-2 bg-white border-2 border-primary dark:border-secondary dark:bg-gray-800 rounded' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <div className='text-red-600 px-1'>
                            {error.email}
                        </div>
                        <input type='text' placeholder='Your Name' name='from_name' className='w-full mt-4 p-2 bg-white border-2 border-primary dark:border-secondary dark:bg-gray-800 rounded' value={name} onChange={(e) => { setName(e.target.value) }} />
                        <div className='text-red-600 px-1'>
                            {error.name}
                        </div>
                        <textarea placeholder='Message' name='message' className='w-full p-2 mt-4 h-48 bg-white border-2 border-primary dark:border-secondary dark:bg-gray-800 rounded' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                        <div className='text-red-600 px-1'>
                            {error.message}
                        </div>
                        <div className='w-full'>
                            <button type='submit' className='flex float-right py-2 px-4 mt-2 bg-primary dark:bg-secondary text-neutral-50 w-32 rounded-full text-left items-center justify-between hover:bg-blue-900 dark:hover:bg-teal-400 hover:shadow-lg transition duration-200 ease-in-out'>
                                Send <FontAwesomeIcon className='text-neutral-50' icon={faArrowRight} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} sx={{ width: '100%' }}>
                    Message sent successfully!
                </Alert>
            </Snackbar>
        </>
    );
}

export default Contact;
