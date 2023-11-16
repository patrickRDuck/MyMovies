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
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    padding: 5.3rem 12.3rem;

    > div:nth-child(1) {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            flex: 1;

            white-space: nowrap;
            font-size: 3.2rem;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

    > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        height: 46vh;

        overflow-y: auto;
    }
`