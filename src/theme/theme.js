const color = {
    black: '#000000',
    white: '#FFFFFF',
    gray50: '#FAFAFA',
    gray100: '#F5F5F5',
    gray200: '#EEEEEE',
    gray300: '#E0E0E0',
    gray400: '#BDBDBD',
    gray500: '#9E9E9E',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#212121',
    pink50:'#F6A6BB',
    pink500:'#E94C89',
};

const breakpoint = {
    tablet: 728,
};

const media = {
    tablet: `max-width: ${breakpoint.tablet}px`
}

const theme = {
    color,
    breakpoint,
    media
};

export default theme;