import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

export const Container = styled.div<IPropsTheme>`

    width: 100%;

    > header{
        background: rgba(255, 133, 155, 0.05);
    
        height: 14.4rem;
        width: 100%;
    
        padding: 6.4rem 10vw;
    }
`

export const Form = styled.form`
    height: fit-content;
    width: 35rem;

    margin: -9rem auto 0;

    display: flex;
    flex-direction: column;
    gap: .9rem;

    > div:nth-child(4) {
        margin-top: 1.6rem;
    }

    > div:last-child {
        margin-top: 1.6rem;
    }
`

export const Avatar = styled.div<IPropsTheme>`
    margin: 0 auto 4.6rem;
    position: relative;

    > img {
        width: 18.6rem;
        height: 18.6rem;

        border-radius: 36rem;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    }

    > label {
        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 36rem;

        position: absolute;
        bottom: .6rem;
        right: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 4.2rem;
        width: 4.2rem;

        svg {
            color: ${({theme}) => theme.COLORS.BLACK};
            cursor: pointer;
        }

        input {
            display: none;
        }
    }
`