import { faChartPie, faUser, faShop, faCreditCard, faTicket, faArrowRightFromBracket, faBoxOpen, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import pp from './images/pp.png'
import tpp1 from './images/tpp1.png'
import tpp2 from './images/tpp2.png'
import tpp3 from './images/tpp3.png'
import tpp4 from './images/tpp4.png'
import tpp5 from './images/tpp5.png'
import tpp6 from './images/tpp6.png'
import tpp7 from './images/tpp7.png'
import tpp8 from './images/tpp8.png'




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

export const AdminUsers = [
    {
        img: tpp1,
        firstname: 'Adebayo',
        lastname: 'Olowofoyeku',
        email: 'adebayoolowofoyeku@gmail.com',
        date: 'May 26, 2019',
    },
    {
        img: tpp2,
        firstname: 'Stephen',
        lastname: 'Soleye',
        email: 'admin@gmail.com',
        date: 'May 26, 2019',
    },
]

export const RegisteredUsers = [
    {
        img: tpp1,
        firstname: 'Tom',
        lastname: 'Cruise',
        email: 'user@gmail.com',
        date: 'May 26, 2019',
    },
    {
        img: tpp2,
        firstname: 'Matt',
        lastname: 'Damon',
        email: 'user@gmail.com',
        date: 'May 26, 2019',
    },
    {
        img: tpp3,
        firstname: 'Robert',
        lastname: 'Downey',
        email: 'user@gmail.com',
        date: 'May 26, 2019',
    },
    {
        img: tpp4,
        firstname: 'Christian',
        lastname: 'Bale',
        email: 'user@gmail.com',
        date: 'May 6, 2019',
    },

    {
        img: tpp5,
        firstname: 'Henry',
        lastname: 'Cavil',
        email: 'user@gmail.com',
        date: 'May 6, 2019',
    },
    {
        img: tpp6,
        firstname: 'Chris',
        lastname: 'Evans',
        email: 'user@gmail.com',
        date: 'May 6, 2019',
    },
    {
        img: tpp7,
        firstname: 'Sam',
        lastname: 'Smith',
        email: 'user@gmail.com',
        date: 'May 6, 2019',
    },
    {
        img: tpp8,
        firstname: 'Steve',
        lastname: 'Rogers',
        email: 'user@gmail.com',
        date: 'May 6, 2019',
    },
]

export const productCard = [
    {
        title: 'Total Products',
        value: '5874',
        icon: faBoxOpen,
        svgColor: '#3a36db'
    },
    {
        title: 'Total Sales',
        value: '10045',
        icon: faCartShopping,
        svgColor: '#ff69b4'
    }
]