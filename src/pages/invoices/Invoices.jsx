import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Invoices.css'
import InvoiceTable from '../../components/invoicetable/InvoiceTable'
import Navbar from '../../components/navBar/NavBar'
import { RegisteredUsers } from '../../data'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


const Invoices = () => {

  return (
        <div className='invoices'>
            <div>
                <Navbar page='Invoices' />

                <div className='users'>
                    <div className='header'>
                        <h1>Invoices</h1>
                        <Link to='/invoices/new'>
                        <div className='function'>
                            <FontAwesomeIcon className='headerIcon' icon={faPlus} />
                            <p>Add Invoice</p>
                        </div>
                        </Link>
                    </div>

                    <InvoiceTable InvoiceData={RegisteredUsers} />
                </div>
            </div>
        </div>
        
  )
}

export default Invoices