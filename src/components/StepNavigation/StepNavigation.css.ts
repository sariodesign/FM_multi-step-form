import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../assets/GlobalVariablesTheme.css'

export const baseContainer = style({
    backgroundColor: '#fff',
    bottom: 0,
    display: 'flex',
    left: 0,
    padding: 16,
    position: 'fixed',
    width: '100%'
})

export const container = styleVariants({
    base:[baseContainer, {
        justifyContent: 'space-between',
    }],
    alignRight:[baseContainer, {
        justifyContent: 'flex-end',
    }]
});

export const containerAlignRight = style({
    justifyContent: 'flex-end'
})

export const btnLink = style({
    border: 0,
    backgroundColor: 'transparent',
    color: vars.colors.neutral.coolGray
})

export const btnPrimary = style({
    backgroundColor: vars.colors.primary.marineBlue,
    border: 0,
    borderRadius: '4px',
    color: vars.colors.neutral.white,
    height: 40
})