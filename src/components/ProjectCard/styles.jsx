import styled from 'styled-components';

export const styles = styled.div`
    width: 28%;
    height: 443px;
    padding-bottom: 20px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    border: solid 2px white;
    border-radius: 10px;
    background-color: rgba(10, 10, 10, 0.8);

    transition: 0.5s;

    :hover{
        animation-name: heartBeating;
        animation-duration: 0.8s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-time-function: easy-in-out;
    }

    @keyframes heartBeating{
        from{
            transform: scale(1);
        }

        to{
            transform: scale(1.05);
        }
    }

    > .card-image-box{
        width: 100%;
        margin-bottom: 10px;
        overflow: hidden;
        border-radius: 10px;
    }

    > .card-image-box > img {
        width: 100%;
        transition: all 1s;
    }

    > .card-image-box > img:hover {
        transform: scale(1.1);
    }

    > .project-info{
        padding: 0 10px;
        max-width: 85%;
        text-align: center;
        color: white;
    }

    > .project-info > p{
        color: #C6C6C6;
    }

    > .techs-box{
        margin: 20px 0;
        padding: 0 10px;

        display: flex;
        align-items: center;
        gap: 25px;
    }

    > .techs-box > .tech{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    > .techs-box > .tech > div{
        width: 45px;
        height: 45px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
    }

    .blue{
        background: linear-gradient(90deg, #096599 4.46%, #71CCFF 100%);
    }

    .green{
        background: linear-gradient(90deg, #0C9909 4.46%, #73FF71 100%);
    }

    .pink{
        background: linear-gradient(90deg, #990982 4.46%, #FF71F1 100%);
    }

    .yellow{
        background: linear-gradient(90deg, #7F881B 4.46%, #FFEE54 100%);
    }

    .purple{
        background: linear-gradient(90deg, #6B0999 4.46%, #9E71FF 100%);
    }

    .orange{
        background: linear-gradient(90deg, #994E09 4.46%, #FF9371 100%);
    }

    .gray{
        background: linear-gradient(90deg, #6B6B6B 4.46%, #F2F2F2 100%);
    }

    > .techs-box > .tech > div > img{
        width: 70%;
    }

    > .techs-box > .tech > label{
        font-family: font-family: 'Merriweather';
        font-weight: 500;
        line-height: 10px;
        font-size: 14px;
        color: white;
    }

    > button{
        width: 35%;
        padding: 7px 0;
        
        font-size: 16px;
        font-family: font-family: 'Merriweather';
        font-weight: 700;
        line-height: 15px;

        color: white;
        background: #E82C2C;
        border: none;
        border-radius: 5px;

        cursor: pointer;
    }
`
