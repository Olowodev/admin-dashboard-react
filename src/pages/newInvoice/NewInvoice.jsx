import React from 'react'
import { faTrash, faDownload, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../images/logo.png'
import { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'



const NewInvoice = () => {
    const [userData, setUserData] = useState([]);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Invoice"
    });

  return (
    <div className='addNewInvoice'>
        <div className='invoiceForm'>
            <form>
                <div className='invoiceformContainer'>
                    <div className='invoiceheader'>
                        <h1>Create New Invoice</h1>
                    </div>
                    {/*<div className='invoice-imageSelect'>
                        <FontAwesomeIcon icon={faCamera} />
                    </div>*/}
                    <div className='invoiceFormInputContainer'>
                        <div className='invoiceFormInput'>
                            <label>Invoice Id</label>
                            <input />
                        </div>
                        <div className='invoiceFormInput'>
                            <label>Date</label>
                            <input />
                        </div>
                    </div>
                    <div className='invoiceFormInputContainer'>
                        <div className='invoiceFormInput'>
                            <label>Name</label>
                            <input />
                        </div>
                        <div className='invoiceFormInput'>
                            <label>Email</label>
                            <input />
                        </div>
                    </div>
                    <div className='invoiceFormInput'>
                        <label>Address</label>
                        <input />
                    </div>
                    <div className='invoiceFormInputContainer'>
                        <div className='invoiceFormInput'>
                            <label>City</label>
                            <input />
                        </div>
                        <div className='invoiceFormInput'>
                            <label>Zip/Postal code</label>
                            <input />
                        </div>
                    </div>
                    <div className='invoiceFormInput single'>
                        <label>Country</label>
                        <input />
                    </div>

                    <div className='productDesc'>
                        <div>
                            <h3>Product Description</h3>
                        </div>

                        <div className=''>
                            <div className='invoiceFormInputContainer'>
                                <div className='invoiceFormInput'>
                                    <label>Product</label>
                                    <input />
                                </div>
                                <div className='invoiceFormInput'>
                                    <label>Description</label>
                                    <input />
                                </div>
                            </div>                            <div className='invoiceFormInputContainer'>
                            <div className='invoiceFormInput'>
                                <label>Quantity</label>
                                <input />
                            </div>
                            <div className='invoiceFormInput'>
                                <label>Price</label>
                                <input />
                            </div>
                        </div>
                        <button className='invoiceAddButton'>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>

                <div>
                    <table className='table'>
                        <thead>
                            <th className='th'>
                                <p>Product</p>
                            </th>
                            <th className='th'>
                                <p>Price</p>
                            </th>
                            <th className='th'>
                                <p>QTY</p>
                            </th>
                            <th className='th'>
                                <p>Amount</p>
                            </th>
                        </thead>
                        <tbody>
                            {userData.map((user, index)=>(
                                <tr key={index} className='tbody'>
                                    <td>
                                        <p>stuff</p>
                                    </td>
                                    <td>
                                        <p>$40</p>
                                    </td>
                                    <td>
                                        <p>10</p>
                                    </td>
                                    <td>
                                        <p>$400</p>
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <button className='createInvoice'>
                    <p>Create Invoice</p>
                </button>
            </div>
        </form>
    </div>

    <div  className='invoicePreview'>
        <div className='invoicePreviewHead'>
            <h1>Preview</h1>
            <FontAwesomeIcon onClick={handlePrint} className='downloadIcon' icon={faDownload} />
        </div>
        <div ref={componentRef} >
        <div className='infoArea'>
            <div className='infoAreaSection'>
                <img src={logo} alt='logo' />
                <div>
                    <p>@ your.mail@gmail.com</p>
                    <p>+44 745977374</p>
                </div>
            </div>
            <div className='infoAreaSection'>
                <p>RECIPIENT</p>
                <h1>INVOICE</h1>
            </div>
            <div className='infoAreaSection'>
                <p>
                    JOHN SMITH<br />
                    4304 Liberty Avenue<br />
                    92680 Tustin, CA<br />
                    VAT no: 12345678<br />
                </p>
                <p>
                    Invoice no.<br />
                    0000001<br />
                </p>
            </div>
            <div className='infoAreaSection'>
                <p>
                    @ company.mail@gmail<br />
                    + 386 714 505 8385<br />
                </p>
                <p>
                    Invoice date<br />
                    January 1, 2022<br />
                </p>
                </div>
            </div>

            <div>
                <div>
                    <table className='table'>
                        <thead>
                            <th className='th'>
                                <p>Product</p>
                            </th>
                            <th className='th'>
                                <p>Description</p>
                            </th>
                            <th className='th'>
                                <p>Price</p>
                            </th>
                            <th className='th'>
                                <p>QTY</p>
                            </th>
                            <th className='th'>
                                <p>Amount</p>
                            </th>
                        </thead>
                        <tbody>
                                        
                            <tr className='tbody'>
                                <td>
                                    <p>stuff</p>
                                </td>
                                <td>
                                    <p>DESCRIPTION STUFFFFFFFFFFFF</p>
                                </td>
                                <td>
                                    <p>$40</p>
                                </td>
                                <td>
                                    <p>10</p>
                                </td>
                                <td>
                                    <p>$400</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                            
                <div>
                    <div>
                        <h3>SUBTOTAL</h3>
                        <p>$3000</p>
                    </div>
                    <div>
                        <h3>TOTAL</h3>
                        <p>$3000</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NewInvoice