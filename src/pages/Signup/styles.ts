import styled from "styled-components";
import backgroundimg from '../../assets/background.png'
import { IPropsTheme } from "../../styles/Theme";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`

export const Form = styled.form<IPropsTheme>`
    flex: 0.5;

    padding: 5rem 13.6rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;

    .header {
        display: flex;
        flex-direction: column;
        gap: .3rem;

        h1 {
            font-size: 4.8rem;
            color: ${({theme}) => theme.COLORS.PINK};
            font-weight: 700;
        }

        span {
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }


    > h2 {
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-block: 2.4rem;
    }

    #input-wrapper {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: .8rem;
    }

    > button:last-child {
        margin-top: 2.4rem;
        align-self: center;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundimg}) no-repeat center center;
    background-size: cover;
    filter: brightness(0.4);
`