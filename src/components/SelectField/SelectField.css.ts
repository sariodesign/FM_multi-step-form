import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../assets/GlobalVariablesTheme.css'

const base = style({
    alignItems: 'flex-start',
    border: '1px solid',
    borderRadius: 8,
    display: 'flex',
    marginBottom: 12,
    padding: 16,

    ':last-child': {
        marginBottom: 24
    }
})

export const container = styleVariants({
    base:[base, {
        borderColor: vars.colors.neutral.coolGray,
    }],
    selected:[base, {
        backgroundColor: vars.colors.neutral.magnolia,
        borderColor: vars.colors.primary.purplishBlue,
    }]
});

export const text = style({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 12
})

export const name = style({
    fontSize: 14,
    fontWeight: 500,
    margin: 0,
    marginBottom: 6
});

export const price = style({
    color: vars.colors.neutral.coolGray,
    fontSize: 12,
    margin: '0 0 4px'
});

export const moreInfo = style({
    fontSize: 11,
    margin: 0
});
