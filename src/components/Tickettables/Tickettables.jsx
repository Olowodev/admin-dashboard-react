import './Tickettables.css'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEllipsisV, FaTrash } from "react-icons/fa";
import {Link} from 'react-router-dom'

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

const Tickettables = ({Ticket, email}) => {
    
    
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
                <tbody>
                {//{console.log(Ticket.length)}
}
                    {Ticket.map((Tic, index)=>(
                        <tr className='tbody'>
                            <td>
                        <a href={`https://mail.google.com/mail/u/?authuser=${email}#inbox/${Tic.id}`} target="_blank">
                                <div className='topic'>
                                    <p>{Tic.subject}</p>
                                </div>
                        </a>

                            </td>
                            <td>
                                <p className='name'>{Tic.from}</p>
                            </td>
                            <td>
                                <div className='date'>
                                    <p>{Tic.date}</p>
                                    <p>me</p>
                                </div>
                            </td>
                            <FaEllipsisComponent />

                        </tr>
                        ))
                        }   
                </tbody>

            </table>
            {//{Ticket == 0 && <p className='no-data'>No data to display.....</p>}
}
        </div>
    );
}

export default Tickettables;