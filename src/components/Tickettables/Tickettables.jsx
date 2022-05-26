import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Ticket } from "../../data";
import './Tickettables.css'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Tickettables = () => {
    return (
        <div>
            <table className='table'>
                <thead>
                    <th className='th'>Ticket details</th>
                    <th className='th'>
                        <div>
                            <p>Customer name</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Date</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>Priority</th>
                </thead>
                <tbody>
                    {Ticket.map((ticket, index)=>(
                        <tr key={index} className='tbody'>
                            <td>
                                <div className='topic'>
                                    <img src={ticket.img} alt='' />
                                    <p>{ticket.title}</p>
                                </div>
                            </td>
                            <td>
                                <p className='name'>{ticket.name}</p>
                            </td>
                            <td>
                                <div className='date'>
                                    <p>{ticket.date}</p>
                                    <p>{ticket.time}</p>
                                </div>
                            </td>
                            <td>
                                <div className={`${ticket.priority} priority`}><p>{ticket.priority}</p></div>
                            </td>
                            <FaEllipsisComponent />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tickettables;