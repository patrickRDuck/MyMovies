import { createGlobalStyle } from "styled-components";
import { IPropsTheme} from "./Theme";

export const GlobalStyle = createGlobalStyle<IPropsTheme>`

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.COLORS.PINK};
        border-radius: 8px;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }


    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        font-family: 'Roboto Slab', serif;
        font-size: 62.5%;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    a {
        text-decoration: none;
    }

    button {
        border: none;
    }

    input {
        outline: none;
    }

    a,
    button {
        cursor: pointer;
        transition: filter 250ms ease-out;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    a:hover,
    button:hover {
        filter: brightness(0.9);
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`