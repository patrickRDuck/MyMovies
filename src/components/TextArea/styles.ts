import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

export const Container = styled.div<IPropsTheme>`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    border-radius: 1rem;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    > textarea {
        border: 1px solid transparent;
        border-radius: 1rem;
        background-color: transparent;

        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};

        padding: 1.5rem 2.4rem 1.5rem 1.8rem;

        width: 100%;

        resize: none;

        transition: all 300ms ease-out;

        &:focus {
            outline: none;
            border: 1px solid ${({theme}) => theme.COLORS.PINK};
        }
    }
`