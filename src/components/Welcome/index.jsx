import React from 'react';
import git1 from '../../assets/images/github1.png';
import git2 from '../../assets/images/curriculum.png';
import curriculum from '../../assets/documents/Curriculo.pdf';
import { styles as StyledWelcome } from "./styles";

const Welcome = () => {

    return(
        <StyledWelcome id="first-screen" className="nav-space screen">
            <section>
                <div className="introduction-box">
                    <h1>Bem vindo ao meu portfolio</h1>
                    <h3>Meu nome é Leandro e eu sou um </h3>
                    <label>Desenvolvedor Web</label>
                    <div className="buttons">
                        <a href="https://github.com/Jamajal" target="_blank"><img src={git1} alt="git1" /></a>
                        <a href={curriculum} target="_blank"><img src={git2} alt="gi2" /></a>
                    </div>
                </div>
            </section>
        </StyledWelcome>
    )
}

export default Welcome;