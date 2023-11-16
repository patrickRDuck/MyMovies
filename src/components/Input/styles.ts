import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

interface IProps extends IPropsTheme {
    $outline: boolean
} 

export const Container = styled.div<IProps>`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border: 1px solid transparent;

    border-radius: 1rem;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    > input {
        border: none;
        border-radius: 1rem;
        background-color: transparent;

        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};

        padding: 1.5rem 2.4rem 1.5rem 1.8rem;

        width: 100%;
    }

    > svg {
        margin-left: 1.2rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    transition: all 300ms ease-out;

    ${({$outline, theme}) =>
        $outline ? 
            `&:focus-within {
            outline: none;
            border: 1px solid ${theme.COLORS.PINK};`
        : null
    }
`