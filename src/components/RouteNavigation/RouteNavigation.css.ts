import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../assets/GlobalVariablesTheme.css'

export const navigation = style({
    backgroundImage: 'url("/bg-sidebar-mobile.svg")',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
    display: 'flex',
    gap: '16px',
    height: '172px',
    justifyContent: 'center',
    paddingTop: '32px'
})

export const item = style({
    display: 'flex',
    fontFamily: vars.font.base
})

const roundBase = style({
    alignItems: 'center',
    border: '1px solid',
    borderColor: vars.colors.neutral.magnolia,
    borderRadius: '50%',
    display: 'flex',
    height: '32px',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.25s ease-in-out',
    width: '32px',

    '@media': {
        '(hover: hover)': {
            backgroundColor: vars.colors.primary.marineBlue,
        }
    }
});

export const round = styleVariants({
    base: [roundBase, { 
        backgroundColor: vars.colors.neutral.transparent,
        color: vars.colors.neutral.magnolia,
    }],
    active: [roundBase, {
        backgroundColor: vars.colors.neutral.magnolia,
        color: vars.colors.primary.marineBlue,
    }]
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