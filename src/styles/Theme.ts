interface ICOLORS {
    BACKGROUND_700: string
    BACKGROUND_800: string
    BACKGROUND_900: string
    BACKGROUND_950: string

    PINK: string
    WHITE: string
    BLACK: string
    GRAY_50: string
    GRAY_100: string
    GRAY_200: string
}

interface ITheme {
    COLORS: ICOLORS
}

export interface IPropsTheme {
    theme: ITheme
}


export const theme:ITheme = {
    COLORS: {
        BACKGROUND_700: '#262529',
        BACKGROUND_800: '#1C1B1E',
        BACKGROUND_900: '#282124',
        BACKGROUND_950: '#0D0C0F',

        PINK: '#FF859B',
        WHITE: '#FFFFFF',
        BLACK: "#312E38",
        GRAY_50: 'E5E5E5',
        GRAY_100: '#948F99',
        GRAY_200: '#3E3B47'

    }
}