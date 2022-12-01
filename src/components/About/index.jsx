import React from 'react';
import { styles as StyledAbout } from './styles'

import myPhoto from '../../assets/images/myPhoto.jpeg';

const About = () => {
    return(
        
        <StyledAbout id="second-screen" className="nav-space screen">
            <img src={myPhoto} alt="My image" className="myPhoto" />
    
            <section className="top-side">
                <div>
                    <h2>Sobre mim</h2>
                    <p>Tenho 23 anos, moro em Ouro Preto - MG, estou terminando o curso Ciências da Computação na Universidade Federal de Ouro Preto </p>
                </div>
                <div>
                    <h2>Atuação</h2>
                    <p>Já estudei tanto o Frontend como Backend, adquiri uma boa base nas duas áreas e estou disposto a trabalhar em ambas </p>
                </div>
            </section>
            <section className="bottom-side">
                <div>
                    <h2>Competências</h2>
                    <p>Para o front tenho uma boa base em Html, Css, Javascript, React e Tailwind, estou iniciando os estudos de Next. No back estudei Nodejs, Express, Mongodb, Postgresql e Prisma. Futuramente quero estudar Nest. </p>
                </div>
                <div>
                    <h2>Objetivo</h2>
                    <p>Como estou na fase inicial da minha carreica, busco uma oportunidade de estágio, mas vislumbro também uma vaga como desenvolvedor junior.</p>
                </div>
            </section>
        </StyledAbout>
        
    )
}

export default About;