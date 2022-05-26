import { faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import './InvoiceTable.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaStar, FaEllipsisV, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";

function FaStarComponent() {
    const [clicked, setClicked] = useState(false);

    return (
        <FaStar onClick={() => {
            setClicked(!clicked);
        }}
        style={{ color: clicked ? "gold" : "#9fa2b4"}}
        className="star" />
    );
}

function FaEllipsisComponent() {
    

    return (
        <td className="menu" >
            <div>
            <FaEllipsisV className="menuIcon" />
            <ul className="submenu">
                <li className="submenu-item">
                    <div>
                        <FaEdit />
                        <p>Edit</p>
                    </div>
                </li>
                <li className="submenu-item">
                    <div>
                        <FaTrash />
                        <p>Delete</p>
                    </div>
                </li>
            </ul>
            </div>
        </td>
    );
}

const InvoiceTable = ({InvoiceData}) => {
    return (
        <div>
            <table className='table'>
                <thead className="thead">
                    <th className='th'>
                        <div>
                            <p>Invoice Id</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Name</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Email</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Date</p>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </th>
                </thead>
                <tbody>
                    {InvoiceData.map((invoice, index)=>(
                        <tr key={index} className='tbody'>
                            <td>
                                <p>{`#${index}`}</p>
                            </td>
                            <td>
                                <div>
                                    <img src={invoice.img} alt='' />
                                    <p>{`${invoice.firstname} ${invoice.lastname}`}</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p>{invoice.email}</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    <p>{invoice.date}</p>
                                </div>
                            </td>
                            <td>
                                <FaStarComponent className="star"/>
                            </td>
                            <FaEllipsisComponent />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default InvoiceTable;