import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

export const Container = styled.div<IPropsTheme>`
    display: flex;
    align-items: center;
    gap: .6rem;

    > svg {
        color: ${({theme}) => theme.COLORS.PINK};
    }
`