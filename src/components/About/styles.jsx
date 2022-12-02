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
        max-width: 300px;
        text-align: center;
        margin-top: 150px;
    }

    > section > div > h2{
        font-size: 30px;
    }

    > section > div > p{
        line-height: 22px;
    }
`