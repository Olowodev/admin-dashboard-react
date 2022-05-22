import { faCalendarAlt, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import './Usertables.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTrash, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Usertables = ({userData}) => {
    return (
        <div>
            <table className='table'>
                <thead>
                    <th className='th'><input type='checkbox' /></th>
                    <th className='th'>
                        <div>
                            <p>Name</p>
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
                        <FontAwesomeIcon icon={faTrash} />
                    </th>
                </thead>
                <tbody>
                    {userData.map((user, index)=>(
                        <tr key={index} className='tbody'>
                            <td>
                                <input type='checkbox' />
                            </td>
                            <td>
                                <div>
                                    <img src={user.img} />
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
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    <p>{user.date}</p>
                                </div>
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

export default Usertables;