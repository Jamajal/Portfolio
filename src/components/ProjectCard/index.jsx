import React from 'react';
import { styles as StyledProjectCard } from './styles';

import cardImage from '../../assets/images/geoApp.png';
import tsIcon from '../../assets/images/tsIcon.png';

const ProjectCard = () =>{
    return(
        <StyledProjectCard>
            <div className="card-image-box">
                <img src={cardImage} alt="Geo app" />
            </div>
            <div className="project-info">
                <h1>Titulo</h1>
                <p>Descrição do projeto</p>
            </div>
            <div className="techs-box">
                <div className="tech">
                    <div className="orange">
                        <img src={tsIcon} alt="Typescript Icon" />
                    </div>
                    <label>Typescript</label>
                </div>
                <div className="tech">
                    <div className="yellow">
                        <img src={tsIcon} alt="Typescript Icon" />
                    </div>
                    <label>NodeJs</label>
                </div>
                <div className="tech">
                    <div className="purple">
                        <img src={tsIcon} alt="Typescript Icon" />
                    </div>
                    <label>Bootstrap</label>
                </div>
            </div>
            <button>
                Ver mais
            </button>
        </StyledProjectCard>
    )
}

export default ProjectCard