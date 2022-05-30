import { faCalendarAlt, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import './Usertables.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faEnvelope, faUserCircle, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FaEllipsisV, FaTrash, FaEdit, FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";

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

const Usertables = ({userData, currentPage, handleSorting, field, sortDirection}) => {
    
    const getMonth = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const neededDate  = new Date(date);

        const month = months[neededDate.getMonth()]

        return month
    }

    const getDay = (date) => {
        const neededDate  = new Date(date);

        const day = neededDate.getDate()

        return day
    }

    const getYear = (date) => {
        const neededDate  = new Date(date);

        const year = neededDate.getFullYear()

        return year
    }
    

    return (
        <div>
            <table className='table'>
                <thead>
                    <th className='th'>
                        <div onClick={handleSorting(firstname)}>
                            <p>Name</p>
                            {field === 'firstname' && sortDirection === -1 ? 
                            <FontAwesomeIcon icon={faCaretDown}/> :
                            field === 'firstname' && sortDirection === 1 ?
                            <FontAwesomeIcon icon={faCaretUp} /> :
                            null
                            }
                        </div>
                    </th>
                    <th className='th'>
                        <div onClick={handleSorting(email)}>
                            <p>Email</p>
                            {field === 'email' && sortDirection === -1 ? 
                            <FontAwesomeIcon icon={faCaretDown}/> :
                            field === 'email' && sortDirection === 1 ?
                            <FontAwesomeIcon icon={faCaretUp} /> :
                            null
                            }
                        </div>
                    </th>
                    <th className='th'>
                        <div onClick={handleSorting(createdAt)}>
                            <p>Date</p>
                            {field === 'createdAt' && sortDirection === -1 ? 
                            <FontAwesomeIcon icon={faCaretDown}/> :
                            field === 'createdAt' && sortDirection === 1 ?
                            <FontAwesomeIcon icon={faCaretUp} /> :
                            null
                            }
                        </div>
                    </th>
                </thead>
                {userData.length > 0 &&
                <tbody>
                    {userData.map((user, index)=>(
                        <tr key={index} className='tbody'>
                            <td>
                                <div>
                                    {!user.profileImg ? <FontAwesomeIcon className="userImg" icon={faUserCircle} /> : <img src={user.profileImg} alt='' />}
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
                                    <p>{`${getMonth(user.createdAt)} ${getDay(user.createdAt)}, ${getYear(user.createdAt)}`}</p>
                                </div>
                            </td>
                            <FaEllipsisComponent />
                        </tr>
                    ))}
                </tbody>
                }
            </table>
            {userData.length === 0 && <p className='no-data'>No data to display.....</p>}
            
        </div>
    );
}

export default Usertables;