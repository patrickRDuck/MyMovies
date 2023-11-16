import styled from "styled-components";
// import { Link } from "react-router-dom";
import { IPropsTheme } from "../../styles/Theme";

export const Container = styled.a<IPropsTheme>`
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: .8rem;
`