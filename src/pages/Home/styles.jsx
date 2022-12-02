import styled from 'styled-components';

export const styles = styled.div`

    .screen{
        height: 100vh;
    }

    .nav-space{
        margin-left: 20%;
    }

    @media (max-width: 767px){
        .nav-space{
            margin-left: 0;
            padding-top: 60px;
        }
    }
`