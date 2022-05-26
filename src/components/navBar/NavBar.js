import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css'
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../../images/profile.png'
import { useSelector } from 'react-redux';

const Navbar = ({page}) => {

    const user = useSelector((state) => state.user.currentUser === null ? null : state.user.currentUser);
    
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
                    {user.profileImg ? <img src={user.profileImg} alt='' /> :
                    <FontAwesomeIcon className='userIcon' icon={faUserCircle} />}
                </div>  
            </div>
        </div>
    );
}

export default Navbar;