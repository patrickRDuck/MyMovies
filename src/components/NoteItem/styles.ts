import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

interface IProps extends IPropsTheme {
    $isNew: boolean
}

export const Container = styled.div<IProps>`
    display: flex;
    align-items: center;

    padding-right: 1.6rem;

    background: ${({theme, $isNew}) => $isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};

    border: ${({theme, $isNew}) => $isNew ? `2px dashed ${theme.COLORS.BACKGROUND_700}`  : 'transparent'};
    border-radius: 1rem;

    > input {
        background: transparent;
        padding: 2rem 1rem 2rem 1.6rem;

        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};

        border: none;
    }
    
    > button {
        border: none;
        background: transparent;
        
        svg {
            color: ${({theme}) => theme.COLORS.PINK}; 
        }
    }
`