import { createGlobalTheme } from '@vanilla-extract/css';

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
            transparent: 'hsl(255, 0%, 100%)',
        }
    },
    font: {
      base: 'Ubuntu, sans-serif'
    }
  });