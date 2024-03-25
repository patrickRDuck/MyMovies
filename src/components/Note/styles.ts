import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";
import { Link } from "react-router-dom";

export const Container = styled(Link)<IPropsTheme>`
    width: 100%;
    height: fit-content;

    background-color: rgba(255, 133, 155, 0.05);

    padding: 3.2rem;

    border-radius: 1.6rem;

    > strong {
        font-size: 2.4rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > .stars {
        margin-block: 1.1rem;
    }

    > p {
        font-size: 1.5rem;
        text-align: justify;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
`