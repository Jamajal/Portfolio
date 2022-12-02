import styled from 'styled-components';

export const styles = styled.div`
    width: 25%;
    height: 410px;
    padding-bottom: 20px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    border: solid 2px white;
    border-radius: 10px;
    background-color: rgba(10, 10, 10, 0.8);

    transition: 0.5s;
    cursor: pointer;

    :hover{
        animation-name: heartBeating;
        animation-duration: 0.6s;
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
        height: 200px;
        margin-bottom: 10px;

        border-radius: 10px 10px 0 0;
        overflow: hidden;
    }

    > .card-image-box > img {
        width: 100%;
        height: 100%;
        transition: all 1s;
    }

    > .card-image-box > img:hover {
        transform: scale(1.1);
    }

    > .project-info{
        padding: 0 10px;
        max-width: 85%;

        display: flex;
        flex-direction: column;
        align-items: center;

        text-align: center;
        color: white;
    }

    > .project-info > p{
        margin-top: 10px;
        color: #C6C6C6;
    }

    > .techs-box{
        margin-top: 20px;
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

    @media (min-width: 768px) and (max-width: 1023px){
        width: 40%;
        height: 400px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > .card-image-box{
            width: 100%;
            height: 180px;
        }

        > .card-image-box > img{
            height: 100%;
        }
        
        > .project-info > h1{
            font-size: 22px;
            line-height: 22px;
        }

        > .project-info > p {
            margin-top: 10px;

            font-size: 14px;
        }

        > .techs-box{
            gap: 15px;
        }
    
        > .techs-box > .tech{
            gap: 5px;
        }
    
        > .techs-box > .tech > div{
            width: 35px;
            height: 35px;
        }
    }

    @media (max-width: 767px){
        width: 40%;
        height: 320px;

        > .card-image-box{
            width: 100%;
            height: 180px;
        }

        > .card-image-box > img{
            height: 100%;
        }
        
        > .project-info > h1{
            width: 80%;
            align-text: center;

            font-size: 16px;
            line-height: 18px;
        }

        > .project-info > p {
            margin-top: 5px;

            font-size: 12px;
        }

        > .techs-box{
            margin-top: 10px;
            gap: 10px;
        }

        > .techs-box > .tech > div{
            width: 25px;
            height: 25px;
        }
    
        > .techs-box > .tech > div > h1{
            font-size: 14px;
        }
    
        > .techs-box > .tech > label{
            font-size: 10px;
        }
    }
`
