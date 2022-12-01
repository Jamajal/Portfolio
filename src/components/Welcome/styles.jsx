import styled from 'styled-components';
import welcomeBg from '../../assets/images/welcomeBg.png';

export const styles = styled.section`
    display: flex;


    > section{
        width: 100%;
        
        background-image: url("${welcomeBg}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center bottom;
        background-attachment: fixed;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    > section > .introduction-box{
        width: 60%;
        padding: 40px 30px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        font-family: 'Roboto, sans-serif';

        background: rgba(0, 0, 0, 0.7);
        border: solid 1px white;
        border-radius: 20px;
    }

    > section > .introduction-box > h1{
        max-width: 90%;
        font-weight: 700;
        text-align: center;
        font-size: 36px;
        line-height: 57px;
        font-size: 40px;
        color: #ffffff;
    }

    > section > .introduction-box > h3{
        max-width: 60%;
        font-weight: 700;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        color: #A5A5A5;
    }

    > section > .introduction-box > label{
        margin-top: 10px;
        font-size: 28px;
        font-weight: 700;

        color: #FF1D1D;

        animation-name: jumping;
        animation-duration: 0.6s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-time-function: easy-in-out;
    }

    @keyframes jumping{
        from{
        }

        to{
            transform: translateY(-8px);
        }
    }

    .buttons{
        margin-top: 20px;
        display: flex;
        gap: 40px;
    }

    .buttons > a > img{
        width: 60px;
        height: 60px;
        cursor: pointer;
    }


`