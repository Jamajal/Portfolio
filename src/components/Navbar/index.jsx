import React from 'react';
import { styles as StyledNavbar} from './styles';

// Imagens
import instaIcon from '../../assets/images/instaIcon.png';
import ttIcon from '../../assets/images/ttIcon.png';
import linkeIcon from '../../assets/images/linkeIcon.png';

const Navbar = () => {

    return(
        <StyledNavbar>
            <h1>Meu Portfolio</h1>
            <nav className="navegation">
                <a href="#first-screen" className="nav-section">Inicio</a>
                <a href="#second-screen" className="nav-section">Perfil</a>
                <a href="#third-screen" className="nav-section">Projetos</a>
                <a href="#forth-screen" className="nav-section">Contato</a>
            </nav>
            <div className="social-media">
                <a href="https://www.instagram.com/jamal1leandro/" target="_blank">
                    <img src={instaIcon} alt="Instagram" />
                </a>
                <a href="https://twitter.com/liberio_leandro" target="_blank">
                    <img src={ttIcon} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/leandro-lib%C3%A9rio-6661b7221/" target="_blank">
                    <img src={linkeIcon} alt="Linkedin" />
                </a>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;