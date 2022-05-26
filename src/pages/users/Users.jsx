import './Users.css'
import Navbar from '../../components/navBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Usertables from '../../components/usertables/Usertables';
import { AdminUsers, RegisteredUsers } from '../../data';
import { useState, useEffect } from 'react';
import { userRequest } from '../../requestMethods';

const Users = () => {
    const [admins, setAdmins] = useState([]);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        async function fetchadmins() {
        try {
            const res = await userRequest.get('/user/findadmin')
            const admins = res.data
            if (admins.length > 0) {
                setAdmins(admins)
            }
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    async function fetchusers() {
        try {
            const res = await userRequest.get('/user/')
            const users = res.data
            if (users.length > 0) {
                setUsers(users)
            }
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
    fetchadmins();
    fetchusers();
    }, [])
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

                    <Usertables userData={admins} />
                </div>
                <div className='users'>
                    <div className='header'>
                        <h1>Registered Customers</h1>
                        <div className='function'>
                            <FontAwesomeIcon className='headerIcon' icon={faPlus} />
                            <p>Add Customers</p>
                        </div>
                    </div>

                    <Usertables userData={users} />
                </div>
            </div>
        </div>
    );}

export default Users;