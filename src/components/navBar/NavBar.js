import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css'
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../../images/profile.png'
import { useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { userRequest } from '../../requestMethods';

const Navbar = ({page}) => {

    const [show, setShow] = useState(false);
    const [activeUser, setActiveUser] = useState('');

    const toggleModal = () => {
        setShow(!show)
    }

    const user = useSelector((state) => state.user.currentUser === null ? null : state.user.currentUser);

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await userRequest.get(`/user/find/${user._id}`)
                const activeUser = res.data
                setActiveUser(activeUser);
            } catch (err) {
                console.log(err)
            }
        }

        fetchUser();
    }, [])
    
    return (
        <div className='navbar'>
            <div className='navbarTitle'>
                <p>{page}</p>
            </div>

            <div className='navbarEnd'>
                <div className='navbarIcons'>
                    <FontAwesomeIcon className='navbarIcon' icon={faBell} />
                </div>
                <div className='vline'></div>
                <div className='navbarProfile'>
                    <p>{`${user.firstname} ${user.lastname}`}</p>
                    {user.profileImg ? <img onClick={toggleModal} src={user.profileImg} alt='' /> :
                    <FontAwesomeIcon onClick={toggleModal} className='userIcon' icon={faUserCircle} />}
                </div>  
            </div>
            <Modal closeModal={toggleModal} show={show}>
                <div className='profile'>
                    <h2>PROFILE</h2>
                    <div className='hline'></div>
                    <div className='mainProfile'>
                        <div className='leftProfile'>
                            {user.profileImg ? <img onClick={toggleModal} src={user.profileImg} alt='' /> :
                            <FontAwesomeIcon onClick={toggleModal} className='profileUserIcon' icon={faUserCircle} />}

                            <button>CHANGE</button>
                        </div>
                        <div className='rightProfile'>
                            <form>
                                <div className='inputs'>
                                    <label>Firstname</label>
                                    <input defaultValue={activeUser.firstname} />
                                </div>
                                <div className='inputs'>
                                    <label>Lastname</label>
                                    <input defaultValue={activeUser.lastname} />
                                </div>
                                <div className='inputs'>
                                    <label>Email</label>
                                    <input defaultValue={activeUser.email} />
                                </div>
                                <div className='inputs'>
                                    <label>Password</label>
                                    <div className='passwordInputs'>
                                        <input type='password' defaultValue={activeUser.OriginalPassword} />
                                        <input type='password' defaultValue={activeUser.OriginalPassword} />
                                    </div>
                                </div>
                                <button>SAVE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Navbar;