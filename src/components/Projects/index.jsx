import React from 'react';
import ProjectCard from '../ProjectCard';
import EmptyCard from '../EmptyCard';
import { styles as StyledProject } from './styles';

const Project = () => {
    return(
        <StyledProject id="third-screen" className="nav-space">
            <EmptyCard />
        </StyledProject>
    )
}

export default Project;