import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import './Ordertable.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaEllipsisV, FaTrash, FaEdit } from "react-icons/fa";

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

const Ordertable = ({userData}) => {
    return (
        <div>
            <table className='table'>
                <thead>
                    <th className='th'>
                        <div>
                            <p>Product</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Customer</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Email</p>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Date</p>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Amount</p>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Payment Method</p>                            
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>    
                    </th>
                    <th className='th'>
                        <div>
                            <p>Status</p>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </th>
                </thead>
                <tbody>
                    {userData.map((user, index)=>(
                        <tr key={index} className='tbody'>
                            <td className='product'>
                                <img src={user.pp} alt="product" />
                                <p>{user.product}</p>
                            </td>
                            <td>
                                <div>
                                    <p>{`${user.firstname} ${user.lastname}`}</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p>{user.email}</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>{user.date}</p>
                                </div>
                            </td>
                            <td>{user.amount}</td>
                            <td>{user.paymentMethod}</td>
                            <td className= {`status ${user.status}`}>
                                <span>
                                    <p>{user.status}</p>
                                </span>
                            </td>
                            <FaEllipsisComponent />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Ordertable;