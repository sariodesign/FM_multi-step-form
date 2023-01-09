import { style } from '@vanilla-extract/css';
import { vars } from '../../assets/GlobalVariablesTheme.css'

export const container = style({
    backgroundColor: '#fff',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    left: 0,
    padding: 16,
    position: 'fixed',
    width: '100%'
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