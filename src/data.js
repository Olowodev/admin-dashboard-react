import { faChartPie, faUser, faShop, faCreditCard, faTicket, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import pp from './images/pp.png'



export const sidebarTabs = [
    {
        sn: 1,
        icon: faChartPie,
        text: 'Overview',
        link: '/'
    },
    {
        sn: 2,
        icon: faUser,
        text: 'Users',
        link: '/users'
    },
    {
        sn: 3,
        icon: faShop,
        text: 'Products',
        link: '/products'
    },
    {
        sn: 4,
        icon: faCreditCard,
        text: 'Orders',
        link: '/orders'
    },
    {
        sn: 5,
        icon: faTicket,
        text: 'Tickets',
        link: '/tickets'
    },
    {
        sn: 6,
        icon: faArrowRightFromBracket,
        text: 'Log out',
        link: '/login'
    },
]

export const transactions = [
    {
        trackingId: '#1234567',
        pp: pp,
        productname: 'Custom Vinyl',
        customer: 'John Mary',
        date: '1st May',
        amount: '$ 500',
        paymentmethod: 'PayPal',
        status: 'Approved'
    }
]