import { style } from '@vanilla-extract/css';
import { vars } from '../../assets/GlobalVariablesTheme.css'

export const container = style({
    backgroundColor: vars.colors.neutral.white,
    borderRadius: '16px',
    boxShadow: '0px 5px 15px -15px rgba(0,0,0,.75)',
    fontFamily: vars.font.base,
    margin: '0 auto',
    padding: '36px 24px',
    position: 'relative',
    top: '-72px',
    width: 'calc(100% - 32px)',
})

export const legend = style({
    fontSize: 24,
    margin: '0 0 20px'
})

export const subLegend = style({
    color: vars.colors.neutral.coolGray,
    fontSize: 16,
    lineHeight: '24px',
    margin: '0 0 28px'
})

export const toggleContainer = style({
    alignItems: 'center',
    backgroundColor: vars.colors.neutral.magnolia,
    borderRadius: 8,
    color: vars.colors.primary.marineBlue,
    display: 'flex',
    fontSize: 14,
    fontWeight: 500,
    justifyContent: 'center',
    marginTop: 24,
    padding: '12px 0',
})

export const toggle = style({
    appearance: 'none',
    backgroundColor: vars.colors.primary.marineBlue,
    borderRadius: 20,
    height: 20,
    margin: '0px 24px',
    position: 'relative',
    verticalAlign: 'bottom',
    width: 40,

    selectors:{
        '&:checked:after': {
            transform: 'translateX(calc(100% + 4px))'
        },
    },

    ':after': {
        backgroundColor: vars.colors.neutral.white,
        content: '',
        borderRadius: '50%',
        height: 16,
        left: 2,
        position: 'absolute',
        top: 2,
        transition: 'all .25s ease-in-out',
        width: 16
    },
})