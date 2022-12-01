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


    > form > input[type="button"]{
        width: 40%;
        margin-top: 25px;
        cursor: pointer;
        font-weight: 700;
        border: none;
        background-color: #C83636;
    }
`

