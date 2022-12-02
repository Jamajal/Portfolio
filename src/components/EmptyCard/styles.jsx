import styled from 'styled-components';

export const styles = styled.div`
    width: 28%;
    height: 443px;
    padding-bottom: 20px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border: solid 2px white;
    border-radius: 10px;
    background-color: rgba(10, 10, 10, 0.8);

    .loading-box{
        width: 100%;
        height: 56%;
        margin-bottom: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .loading-box > .loader {
        border: 13px solid #363636; 
        border-top: 13px solid #E82C2C; /* Blue */
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
        color: #C6C6C6;
    }

    > .techs-box{
        margin: 20px 0;
        padding: 0 10px;

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
`