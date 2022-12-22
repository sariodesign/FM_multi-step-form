import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../../assets/GlobalVariablesTheme.css'

globalStyle('html, body', {
  margin: 0
});

export const navigation = style({
    backgroundImage: 'url("/bg-sidebar-mobile.svg")',
    backgroundRepeat: 'no-repeat',
    display: 'flex'
})

export const item = style({
    display: 'flex',
    fontFamily: vars.font.base
})

export const round = style({
    alignItems: 'center',
    backgroundColor: vars.colors.neutral.transparent,
    border: '1px solid',
    borderColor: vars.colors.neutral.magnolia,
    borderRadius: '50%',
    color: vars.colors.neutral.magnolia,
    display: 'flex',
    height: '32px',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.25s ease-in-out',
    width: '32px',

    ':hover': {
        backgroundColor: vars.colors.primary.marineBlue,
    },
});

export const text = style({
    display: 'flex',
    flexDirection: 'column',

    '@media': {
        'screen and (max-width: 1439px)': {
            display: 'none'
        }
    }
});

export const tag = style({
    color: '#eee' 
});

export const label = style({
    color: '#fff'
});