import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

interface IProps extends IPropsTheme {
    width: string
    $darkTheme: boolean
}

export const Container = styled.div<IProps>`

    width: ${({width}) => width};

    background-color: transparent;

    button {
        display: flex;
        gap: .4rem;
        align-items: center;
        justify-content: center;

        padding: 1.5rem 3rem;
        width: 100%;

        font-size: 1.6rem;
        font-weight: 500;
        color: ${({theme, $darkTheme}) => $darkTheme ? theme.COLORS.PINK : theme.COLORS.BLACK};

        background-color: ${({theme, $darkTheme}) => $darkTheme ? theme.COLORS.BACKGROUND_950 : theme.COLORS.PINK};
        border: none;
        border-radius: 1rem;
    }

    
`