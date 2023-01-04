import styled from 'styled-components';
import bg from '../../assets/images/projectsBg5.png';

export const styles = styled.section`
    padding: 50px 30px;

    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    background-image: url("${bg}");
    background-size: cover;
    background-position: bottom left;
    background-attachment: fixed;
    overflow: auto;

    @media (max-width: 767px){
        padding: 25px 15px;
        gap: 20px;
    }
`