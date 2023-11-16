import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

interface IProps extends IPropsTheme {
    $large: boolean
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const Tag = styled.div<IProps>`
    padding: ${({$large}) => $large ? '.8rem 1.6rem' : ".5rem 1.6rem"};
    margin-top: 2rem;

    background-color:  ${({$large, theme}) => $large ? theme.COLORS.BACKGROUND_900 : theme.COLORS.BLACK};
    border-radius: .8rem;

    display: flex;
    align-items: start;

    > p {
        font-size: 1.3rem;
        color: ${({theme}) => theme.COLORS.GRAY_50};
        font-weight: 500;

        display: flex;
        align-items: center;
    }
`