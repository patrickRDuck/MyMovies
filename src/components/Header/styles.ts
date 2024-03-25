import styled from "styled-components";
import { IPropsTheme } from "../../styles/Theme";

interface IProps extends IPropsTheme {
    $withoutInput: boolean
}

export const Container = styled.div<IProps>`
    grid-area: header;

    width: 100%;
    height: 100%;

    padding: 2.5% 9%;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_200};

    display: flex;
    align-items: center;
    justify-content: ${({$withoutInput}) => $withoutInput ? "space-between;" : "baseline"};
    gap: 6.4rem;

    > a h1 {
        font-size: 24px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`

export const Profile = styled.div<IPropsTheme>`
    display: flex;
    align-items: center;
    gap: 1rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;

        p {
            font-size: 1.4rem;
            font-weight: 700;
            white-space: nowrap;
        }

        button {
            font-size: 1.4rem;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            background: none;
        }
    }

    > a img {
        height: 6.4rem;
        width: 6.4rem;

        border-radius: 36rem;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    }
`