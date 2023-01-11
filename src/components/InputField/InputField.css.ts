import { style } from '@vanilla-extract/css';
import { vars } from '../../assets/GlobalVariablesTheme.css'

export const field = style({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16
})

export const label = style({
    fontSize: 14,
    fontWeight: 700,
    margin: '0 0 4px'
})

export const input = style({
    border: '1px solid',
    borderColor: vars.colors.neutral.lightGray,
    borderRadius: 4,
    color: vars.colors.neutral.black,
    height: 40,
    padding: '0 16px',

    ':focus':{
        borderColor: vars.colors.primary.purplishBlue,
    },

    ':focus-visible':{
        outline: 'none'
    },

    '@media': {
        'screen and (min-width: 1440px)': {
            display: 'none'
        }
    }
})