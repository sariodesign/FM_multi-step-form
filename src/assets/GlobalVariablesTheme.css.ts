import { createGlobalTheme, globalStyle, style } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
    colors: {
        primary: {
            marineBlue: 'hsl(213, 96%, 18%)',
            purplishBlue: 'hsl(243, 100%, 62%)',
            pastelBlue: 'hsl(228, 100%, 84%)',
            lightBlue: 'hsl(206, 94%, 87%)',
            strawberryRed: 'hsl(354, 84%, 57%)'
        },
        neutral: {
            coolGray: 'hsl(231, 11%, 63%)',
            lightGray: 'hsl(229, 24%, 87%)',
            magnolia: 'hsl(217, 100%, 97%)',
            alabaster: 'hsl(231, 100%, 99%)',
            black: 'hsl(255, 0%, 0%)',
            white: 'hsl(0, 0%, 100%)',
            transparent: 'hsla(255, 100%, 100%, 0)',
        }
    },
    font: {
      base: 'Ubuntu, sans-serif'
    }
});

globalStyle('html, body', {
    margin: 0
});

globalStyle('*', {
    boxSizing: 'border-box'
});

export const app = style({
    minHeight: '100vh',
    
    '@media': {
        'screen and (min-width: 1440px)': {
            display: 'flex'
        }
    }
})

export const stepLayout = style({
    backgroundColor: vars.colors.primary.lightBlue,
    paddingBottom: 72,
})