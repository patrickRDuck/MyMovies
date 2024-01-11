import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

export const Container = styled.button<IPropsTheme>`
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: .8rem;

    background: none;
    width: fit-content;
`