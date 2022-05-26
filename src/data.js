import { faChartPie, faUser, faShop, faCreditCard, faTicket, faArrowRightFromBracket, faBoxOpen, faCartShopping, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
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
        icon: faFileInvoice,
        text: 'Invoices',
        link: '/invoices'
    },
    {
        sn: 7,
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

export const Ticket = [
    {
        img: '/tpp1.png',
        title: 'Contact Email not Linked',
        updateDate: '',
        name: 'Tom Cruise',
        date: 'May 26, 2019',
        time: '6:30pm',
        priority: 'HIGH'
    },
    {
        img: '/tpp2.png',
        title: 'Adding Images to Featured Posts',
        updateDate: '',
        name: 'Matt Damon',
        date: 'May 26, 2019',
        time: '6:30pm',
        priority: 'LOW'
    },
    {
        img: '/tpp3.png',
        title: 'When will I be charged this month?',
        updateDate: '',
        name: 'Robert Downey',
        date: 'May 26, 2019',
        time: '6:30pm',
        priority: 'HIGH'
    },
    {
        img: '/tpp4.png',
        title: 'Payment not going through',
        updateDate: '',
        name: 'Christian Bale',
        date: 'May 6, 2019',
        time: '6:30pm',
        priority: 'NORMAL'
    },

    {
        img: '/tpp5.png',
        title: 'Unable to add replies',
        updateDate: '',
        name: 'Henry Cavil',
        date: 'May 6, 2019',
        time: '6:30pm',
        priority: 'HIGH'
    },
    {
        img: '/tpp6.png',
        title: 'Downtime since last week',
        updateDate: '',
        name: 'Chris Evans',
        date: 'May 6, 2019',
        time: '6:30pm',
        priority: 'NORMAL'
    },
    {
        img: '/tpp7.png',
        title: 'Referral Bonus',
        updateDate: '',
        name: 'Sam Smith',
        date: 'May 6, 2019',
        time: '6:30pm',
        priority: 'LOW'
    },
    {
        img: '/tpp8.png',
        title: 'How do I change my password?',
        name: 'Steve Rogers',
        date: 'May 6, 2019',
        time: '6:30pm',
        priority: 'NORMAL'
    },
]