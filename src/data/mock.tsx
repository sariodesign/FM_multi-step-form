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

export const infoFields = [
    {
        label: 'Name' ,
        type: 'text',
        placeholder: 'e.g. Stephen King',
        required: true
    },
    {
        label: 'Email address',
        type: 'email',
        placeholder: 'e.g. stephenking@lorem.com',
        required: true 
    },
    {
        label: 'Phone number',
        type: 'tel',
        placeholder: 'e.g. +1 234 567 890',
        required: true
    }

]

export const planList = [
    {
        id: 0,
        name: 'Arcade',
        icon: 'icon-arcade.svg',
        price: 9,
        currency: ['$','€','£',],
        interval: 'mo',
        moreInfo: '',
        selected: false
    },
    {
        id: 1,
        name: 'Advanced',
        icon: 'icon-advanced.svg',
        price: 12,
        currency: ['$','€','£',],
        interval: 'mo',
        moreInfo: '',
        selected: false
    },
    {
        id: 2,
        name: 'Pro',
        icon: 'icon-pro.svg',
        price: 15,
        currency: ['$','€','£',],
        interval: 'mo',
        moreInfo: '',
        selected: false
    }
]

export const addonsList = [
    {
        id: 0,
        check: true,
        name: 'Online service',
        info: 'Access to multiplayer games',
        price: 1,
        interval: 'mo',
        moreInfo: '',
        selected: false
    },
    {
        id: 1,
        check: true,
        name: 'Larger storage',
        info: 'Extra 1TB of cloud save',
        price: 2,
        interval: 'mo',
        moreInfo: '',
        selected: false
    },
    {
        id: 2,
        check: true,
        name: 'Customizable profile',
        info: 'Custom team on your profile',
        price: 2,
        interval: 'mo',
        moreInfo: '',
        selected: false
    }
]