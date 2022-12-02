import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'

import { styles as StyledContact } from './styles';

const Contact = () => {

    const [ email, setEmail ] = useState('');
    const [ topic, setTopic ] = useState('');
    const [ message, setMessage ] = useState('');

    const form = useRef();

    const handleEmail = (e) => {
        e.preventDefault();

        const emailContent = {
            email,
            topic,
            message
        };

        emailjs.sendForm('service_ib2l93r', 'template_k81jtqq', form.current, 'tlUPeBCRTAQp07f-e')
            .then(() => {
                alert('Email enviado com sucesso');
                setEmail('');
            });
    }

    return(
        <StyledContact id="forth-screen" className="nav-space screen">
            <form ref={form} onSubmit={handleEmail}>
                <h1>Vamos trabalhar juntos?</h1>
                <h2>Me manda um email :)</h2>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} />
                    <input type="text" name="topic" placeholder="Assunto" onChange={e => setTopic(e.target.value)} value={topic} />
                </div>
                <input type="text" name="message" placeholder="Mensagem" onChange={e => setMessage(e.target.value)} value={message} />
                <input type="submit" value="Enviar" />
            </form>
        </StyledContact>
    )
}

export default Contact;