import { createVar, style } from '@vanilla-extract/css';

export const bgRound = createVar();

export const container = style({
    display: 'flex'
})

export const round = style({
    alignItems: 'center',
    backgroundColor: bgRound,
    borderRadius: '50%',
    color: '#000',
    display: 'flex',
    height: '50px',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    width: '50px',

    vars: {
        [bgRound]: '#ccc'
    },

    ':hover': {
        vars: {
            [bgRound]: 'red'
        }
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