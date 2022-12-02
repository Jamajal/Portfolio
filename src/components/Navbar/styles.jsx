import styled from 'styled-components';

export const styles = styled.aside`
    width: 20%;
    height: 100%;
    background-color: #171925;

    position: fixed;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    h1, a{
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    > h1{
        font-size: 30px;
        color: #D41B1B;
    }

    > nav{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: strech;
    }

    > nav a{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 60px;
        padding: 0 10px;

        text-decoration: none;
        font-size: 18px;
        color: white;
        border-radius: 2px;

        transition: 0.5s;
    }

    .active{
        background-color: #D41B1B;
    }

    > nav a:hover{
        background-color: #D41B1B;
    }

    .social-media{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

        transform: translateY(50px);
    }

    .social-media > a{
        width: 30px;
    }

    .social-media > a >img{
        width: 100%;
    }
`