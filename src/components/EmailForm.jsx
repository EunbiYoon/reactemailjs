import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const EmailForm = () => {

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        //EmailJs serviceID, templateID, and Public Key
        const serviceId='service_udd18xp';
        const templateId='template_r9bgt0j';
        const publickKey='t6m-wQEwFCqgB7bPN';

        //create a new object that contains dynamic template params
        const templateParams={
            from_name:name,
            from_email:email,
            to_name:'Eunbi yoon',
            message:message
        }

        //send the email using emailjs
        emailjs.send(serviceId, templateId, templateParams, publickKey)
            .then((result)=>{
                console.log('Email sent successfully!', result);
                //erase variable
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error)=>{
                console.error('Error sending email:',error);
            })
    }

    return (
        <form onSubmit={handleSubmit} className='emailForm'>
            <input type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit">Send Email</button>
        </form>
    )
}

export default EmailForm