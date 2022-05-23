import { faCalendarAlt, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import './Ordertable.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTrash, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Ordertable = ({userData}) => {
    return (
        <div>
            <table className='table'>
                <thead>
                    <th className='th'><input type='checkbox' /></th>
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
                    <th className='th'>
                        <FontAwesomeIcon icon={faTrash} />
                    </th>
                </thead>
                <tbody>
                    {userData.map((user, index)=>(
                        <tr key={index} className='tbody'>
                            <td>
                                <input type='checkbox' />
                            </td>
                            <td className='product'>
                                <img src={user.pp} alt="product picture" />
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
                            <td className= {'status' + ' ' + user.status}>
                                <span>
                                    <p>{user.status}</p>
                                </span>
                            </td>
                            <td className='menu'>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Ordertable;