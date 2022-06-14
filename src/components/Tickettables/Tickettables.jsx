import './Tickettables.css'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEllipsisV, FaTrash } from "react-icons/fa";
import {Link} from 'react-router-dom'
import moment from 'moment'
import Moment from 'react-moment'

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

const Tickettables = ({Ticket, email, isLoading, setIsLoading}) => {
    

    if(Ticket.length > 0) {
        setIsLoading(false)
    }
    
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
                                    <p className='subject'>{Tic.subject}</p>
                                </div>
                        </a>

                            </td>
                            <td>
                                <p className='name'>{Tic.from.split("<")[1].slice(0, -1)}</p>
                            </td>
                            <td>
                                <div className='date'>
                                    <Moment format='ll'>{Tic.date}</Moment>
                                    <p>
                                    <Moment format='LT'>{Tic.date}</Moment>
                                    </p>
                                </div>
                            </td>
                            <FaEllipsisComponent />

                        </tr>
                        ))
                        }   
                </tbody>

            </table>
            {Ticket == 0 && !isLoading && <p className='no-data'>No data to display.....</p>}
            {isLoading && <div className="loading">
                <div className='lddring'><div></div></div>
                <p>Fetching Data...</p>
                </div>}

        </div>
    );
}

export default Tickettables;