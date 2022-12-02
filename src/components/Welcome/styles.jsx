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

    @media (min-width: 768px) and (max-width: 1023px){
        > section > .introduction-box > h1{
            max-width: 80%;
            line-height: 35px;
            font-size: 30px;
        }

        > section > .introduction-box > h3{
            margin-top: 10px;
            max-width: 90%;
            font-size: 24px;
            line-height: 28px;
        }

        > section > .introduction-box > label{
            font-size: 24px;
        }

        .buttons{
            margin-top: 15px;
            display: flex;
            gap: 25px;
        }
    
        .buttons > a > img{
            width: 50px;
            height: 50px;
        }
    }

    @media (max-width: 767px){
        > section > .introduction-box{
            width: 70%;
            padding: 30px 20px;
        }

        > section > .introduction-box > h1{
            max-width: 90%;
            line-height: 26px;
            font-size: 24px;
        }

        > section > .introduction-box > h3{
            margin-top: 15px;
            max-width: 100%;
            font-size: 18px;
            line-height: 20px;
        }

        > section > .introduction-box > label{
            font-size: 18px;
        }

        .buttons{
            margin-top: 15px;
            display: flex;
            gap: 25px;
        }
    
        .buttons > a > img{
            width: 40px;
            height: 40px;
        }
    }
`