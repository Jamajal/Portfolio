import React from 'react';

import { styles as StyledContact } from './styles';

const Contact = () => {

    return(
        <StyledContact id="forth-screen" className="nav-space screen">
            <form>
                <h1>Vamos trabalhar juntos?</h1>
                <h2>Me manda um email :)</h2>
                <div>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="text" name="topic" placeholder="Assunto" />
                </div>
                <input type="text" name="message" placeholder="Mensagem" />
                <input type="button" value="Enviar" />
            </form>
        </StyledContact>
    )
}

export default Contact;