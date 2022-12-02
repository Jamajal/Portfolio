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

    .loading-box{
        width: 100%;
        height: 200px;
        margin-bottom: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px 10px 0 0;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .loading-box > .loader {
        border: 13px solid #363636; 
        border-top: 13px solid #E82C2C;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        animation: spin 1.6s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

    > .project-info{
        padding: 0 10px;
        max-width: 85%;
        text-align: center;
        color: white;
    }

    > .project-info > p{
        margin-top: 10px;
        color: #C6C6C6;
    }

    > .techs-box{
        margin-top: 20px;
        padding: 0 10px 10px 10px;

        display: flex;
        align-items: center;
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

    > .techs-box > .tech > div > h1{
        font-family: font-family: 'Merriweather';
        font-weight: 700;
        color: white;
    }

    > .techs-box > .tech > label{
        font-family: font-family: 'Merriweather';
        font-weight: 500;
        line-height: 10px;
        font-size: 14px;
        color: white;
    }

    .gray{
        background: linear-gradient(90deg, #6B6B6B 4.46%, #F2F2F2 100%);
    }

    @media (min-width: 768px) and (max-width: 1023px){
        width: 40%;
        height: 400px;
        padding-bottom: 10px;

        .loading-box > .loader {
            width: 80px;
            height: 80px;
        }

        > .project-info > h1{
            font-size: 22px;
            line-height: 22px;
        }

        > .project-info > p {
            margin-top: 10px;

            font-size: 14px;
        }

        > .techs-box > .tech > div{
            width: 35px;
            height: 35px;
        }
    
        > .techs-box > .tech > div > h1{
            font-size: 18px;
        }
    
        > .techs-box > .tech > label{
            font-size: 12px;
        }
    }

    @media (max-width: 767px){
        width: 40%;
        height: 320px;
        padding-bottom: 0;

        .loading-box > .loader {
            width: 60px;
            height: 60px;

            border: 8px solid #363636; 
            border-top: 8px solid #E82C2C;
        }

        .project-info{
            display: flex;
            flex-direction: column;
            align-items: center;
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