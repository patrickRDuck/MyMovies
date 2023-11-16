import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "header"
    "content";
    grid-template-rows: 12.5rem auto;
`
export const Content = styled.div<IPropsTheme>`
    grid-area: content;

    width: 113rem;
    
    margin: 4rem auto 8rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > strong {
        font-size: 3.6rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.WHITE};

        margin-bottom: 1.6rem;
    }
`

export const Form = styled.form<IPropsTheme>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    > div:first-child {
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    > div:nth-child(3) {
        display: flex;
        flex-direction: column;

        span {
            display: block;
            font-size: 2rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            margin-bottom: 2.4rem;
        }

        #tags {
            width: 100%;
            
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_950};
            border-radius: .8rem;

            padding: 1.6rem 2rem;

            display: flex;
            align-items: center;
            gap: 2.4rem;
        }
    }

    > div:last-child {
        display: flex;
        align-items: center;
        gap: 4rem;

        margin-top: 1rem;
    }

`