import styled from 'styled-components'

export const styles = styled.section`
    position: relative;
    max-height: 100%;
    
    > .myPhoto{
        position: absolute;
        width: 220px;
        top: 50%;
        left: 50%;

        box-shadow: -2px 3px 5px 5px rgba(0, 0, 0, 0.47);

        transform: translate(-50%,-50%);
    }

    > section{
        height: 50%;
        display: flex;
        
        justify-content: space-around;

        font-family: 'Merriweather', serif;
    }

    > .bottom-side{
        background-color: #282828;

        color: white;
    }

    > section > div{
        width: 300px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(33%);

        text-align: center;
    }

    > section > div > h2{
        font-size: 30px;
    }

    > section > div > p{
        line-height: 22px;
    }

    @media (min-width: 768px) and (max-width: 1023px){
        > .myPhoto{
            width: 180px;
        }

        > section > div{
            display: flex; 
            flex-direction: column;
            align-items: center;
        }

        > section > div > h2{
            font-size: 24px;
        }
    
        > section > div > p{
            width: 80%;
            margin-top: 10px;

            font-size: 14px;
            line-height: 20px;
        }
    }

    @media (max-width: 767px){
        > .myPhoto{
            width: 140px;
            transform: translate(-50%, -20%);
        }

        > section{
            flex-direction: row; 
            gap: 20px;
        }

        > section > div{
            max-width: 200px;

            flex-direction: column;

            transform: translateY(30%);
        }

        > section > div > h2{
            font-size: 18px;
        }
    
        > section > div > p{
            width: 80%;
            margin-top: 10px;

            font-size: 12px;
            line-height: 16px;
        }
    }
`