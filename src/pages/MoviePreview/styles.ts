import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "header"
    "content";
    grid-template-rows: 12.5rem auto ;
    row-gap: 4rem;

    height: 100vh;
`

export const Content = styled.div<IPropsTheme>`
    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    width: 109.3rem;
    padding: 0 2rem 4rem;
    height: 42rem;
    overflow-y: auto;

    margin: 0 auto;

    > #noteButtons {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > .header {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        > div:first-child {
            display: flex;
            align-items: center;
            gap: 1.9rem;

            strong {
                font-size: 3.8rem;
                font-weight: 500;
                color: ${({theme}) => theme.COLORS.WHITE};
            }
        }

        > div:nth-child(2) {
            display: flex;
            align-items: center;
            gap: 1rem;

            div:first-child {
                display: flex;
                align-items: center;
            }

            span {
                font-size: 1.6rem;
                color: ${({theme}) => theme.COLORS.WHITE};
            }

            span:last-child {
                display: flex;
                align-items: center;
                gap: .4rem;
            }

            svg {
                color: ${({theme}) => theme.COLORS.PINK};
            }
        }
    }

    > p {
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        text-align: justify;
        line-height: normal;

        margin-block: 1.8rem;
    }
`

export const Profile = styled.div`
     > img {
        height: 1.6rem;
        width: 1.6rem;

        border-radius: 36rem;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    }
`