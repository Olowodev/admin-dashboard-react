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
                    <th className='th'>Ticket Subject</th>
                    <th className='th'>
                        <div>
                            <p>Customer email</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Date</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                </thead>
                {Ticket.length > 0 &&
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
                            <FaEllipsisComponent />
                        </tr>
                    ))}
                </tbody>
                }
            </table>
            {Ticket.length === 0 && <p className='no-data'>No data to display.....</p>}
        </div>
    );
}

export default Tickettables;