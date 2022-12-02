import styled from 'styled-components';

import contactBg from '../../assets/images/contactBg.png'

export const styles = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    background: url(${contactBg});
    background-size: cover;
    background-repeat: no-repeat;

    > form{
        width: 55%;
        height: min-content;
        padding: 30px;

        display: flex;
        flex-direction: column;
        align-items: center;
    
        font-family: 'Roboto';

        color: #FFFFFF;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid #FFFFFF;
        border-radius: 10px;
    }

    > form > h1{
        font-weight: 700;
        font-size: 30px;
        text-align: center;
    }

    > form > h2{
        font-size: 24px;
        font-weight: 500;

        color: #BBBBBB;
    }

    > form > div{
        width: 100%; 
        margin-top: 15px;
        display: flex;
        gap: 25px;
    }

    > form input{
        width: 100%;
        padding: 10px;

        font-family: 'Roboto';
        font-size: 20px;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid #9B9B9B;
        border-radius: 5px;
    }

    > form > input[type="text"]{
        height: 100px;
    }

    > form > input[name="message"]{
        display: flex;
        margin-top: 25px;
        height: 200px;
        align-items: start;
    }


    > form > input[type="submit"]{
        width: 40%;
        margin-top: 25px;
        cursor: pointer;
        font-weight: 700;
        border: none;
        background-color: #C83636;
    }

    @media (min-width: 768px) and (max-width: 1023px){
        > form{
            width: 75%;
        }

        > form > h1{
            font-size: 24px;
        }
    
        > form > h2{
            font-size: 18px;
        }

        > form > div{
            margin-top: 15px;

            gap: 15px;
        }
    
        > form input{    
            font-size: 16px;
        }
    
        > form > input[name="message"]{
            margin-top: 15px;
            height: 170px;
        }
    
    
        > form > input[type="submit"]{
            width: 40%;
            margin-top: 15px;
        }
    }

    @media (max-width: 767px){
        > form{
            width: 75%;
            padding: 20px;
        }

        > form > h1{
            font-size: 20px;
        }
    
        > form > h2{
            font-size: 16px;
        }

        > form > div{
            margin-top: 15px;

            gap: 10px;
        }
    
        > form input{    
            font-size: 12px;
        }
    
        > form > input[name="message"]{
            margin-top: 10px;
            height: 130px;
        }
    
    
        > form > input[type="submit"]{
            width: 35%;
            padding: 7px 10px;
            margin-top: 15px;
        }
    }
`

