import './Users.css'
import Navbar from '../../components/navBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Usertables from '../../components/usertables/Usertables';
import { AdminUsers, RegisteredUsers } from '../../data';

const Users = () => {
    return (
        <div>
            <div>
                <Navbar page='Users' />

                <div className='users'>
                    <div className='header'>
                        <h1>Admin Users</h1>
                        <div className='function'>
                            <FontAwesomeIcon className='headerIcon' icon={faPlus} />
                            <p>Add Admin</p>
                        </div>
                    </div>

                    <Usertables userData={AdminUsers} />
                </div>
                <div className='users'>
                    <div className='header'>
                        <h1>Registered Customers</h1>
                        <div className='function'>
                            <FontAwesomeIcon className='headerIcon' icon={faPlus} />
                            <p>Add Customers</p>
                        </div>
                    </div>

                    <Usertables userData={RegisteredUsers} />
                </div>
            </div>
        </div>
    );}

export default Users;