import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useRef, useState } from 'react';
import Footer from '../footer/footer';
import styles from './contact.module.css'
import emailjs from '@emailjs/browser';
import SentMessage from './sentMessage';
import NotSent from './NotSent';




function Contact() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])

    const [isVisible, setIsVisible] = useState(false)

    const form = useRef();

    const validateForm = (e) => {
        sendEmail(e);
        setIsVisible(true)
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2lz36sa', 'template_ih0v20h', form.current, '3IjUzJlBP-DW3uQsS')
            .then((result) => {
                console.log(result.sent);

            }, (error) => {
                console.log(error.text);
            });
        document.getElementById('fieldName').value = '';
        document.getElementById('fieldEmail').value = '';
        document.getElementById('fieldMessage').value = '';
    };

    return (
        <div>

            <div className={styles.container} data-aos='fade-up' >
                <div className={styles.image}>
                    <img src={require('../../Assets/Images/yoga2.jpg')} alt="" />
                </div>
                <div className={styles.center}>

                    <p className={styles.pContact}>Thank you for considering me to capture photos for you. Please fill out this form or contact me directly on my email and I will be happy to get back to you.  </p>
                    <img src={require('../../Assets/Images/email.png')} className={styles.email} />

                    <div className={styles.form}>
                        <form ref={form} onSubmit={validateForm} >
                            <div className={styles.txt_field}>
                                <input type='text'
                                    name='user_name'
                                    id='fieldName'
                                    placeholder='Name'
                                    required
                                />
                            </div>
                            <div className={styles.txt_field}>
                                <input type="email"
                                    name='user_email'
                                    placeholder='Email'
                                    id='fieldEmail'
                                    required
                                />
                            </div>
                            <div className={styles.txt_field}>
                                <input type="text"
                                    name='message'
                                    placeholder='Message'
                                    id='fieldMessage'
                                    required
                                />
                            </div>
                            {/* <input type="submit" value='send' className={styles.submit} /> */}
                            <button type='submit' className={styles.submit} value='send'> send</button>
                        </form>
                        <div >
                            {isVisible ? <SentMessage /> : <NotSent />}
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos='fade-in' >
                <Footer />
            </div>
        </div >
    )
}

export default Contact; 