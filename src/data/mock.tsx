interface Link {
    to: string,
    count: number,
    tag: string,
    label: string
}

export const routeLinks = [
    {
        to: '/info',
        count: 1,
        tag: 'Step 1',
        label: 'Your info'
    },
    {
        to: '/select-plan',
        count: 2,
        tag: 'Step 2',
        label: 'Select plan'
    },
    {
        to: '/add-ons',
        count: 3,
        tag: 'Step 3',
        label: 'Add-ons'
    },
    {
        to: '/summary',
        count: 4,
        tag: 'Step 4',
        label: 'Summary'
    }
]