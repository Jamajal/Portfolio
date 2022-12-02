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

    z-index: 10;

    h1, a{
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    > h1{
        text-align: center;
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
    
    @media (min-width: 768px) and (max-width: 1023px){
        > h1{
            max-width: 100px;
            font-size: 24px;
        }

        > nav > a{
            height: 40px;
            font-size: 14px;
        }

        > .social-media{
            flex-direction: column;
        }

        > .social-media > a{
            width: 24px;
        }
    }

    @media (max-width: 767px){
        height: 10%;
        width: 100%;
        padding: 0 20px;

        flex-direction: row;

        > h1{
            width: 80px;
            font-size: 14px;
        }

        > nav {
            width: auto;
            height: 100%;

            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        > nav > a{
            height: 100%;
            width: 53px;
            padding: 0 7px;

            font-size: 10px;
        }

        > .social-media{
            gap: 10px;

            transform: translateY(0px);
        }

        > .social-media > a{
            width: 18px;
        }
    }
`