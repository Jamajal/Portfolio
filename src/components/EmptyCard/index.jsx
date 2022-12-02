import React from 'react';
import { styles as StyledEmptyCard } from './styles';
import cardImage from '../../assets/images/geoApp.png';

const EmptyCard = () => {
    return(
        <StyledEmptyCard>
            <div className="loading-box">
                <div className="loader" />
            </div>
            <div className="project-info">
                <h1>Trabalho em progresso...</h1>
                <p>Estou trabalhando nesse projeto no momento. Em breve ele estará aqui, volta depois :)</p>
            </div>
            <div className="techs-box">
                <div className="tech">
                    <div className="gray">
                        <h1>?</h1>
                    </div>
                    <label>Segredo</label>
                </div>
            </div>
        </StyledEmptyCard>
    )
}

export default EmptyCard;