import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../../images/profile.png'

const Navbar = ({page}) => {
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
                    <p>Stephen Soleye</p>
                    <img src={profileImg} alt='' />
                </div>  
            </div>
        </div>
    );
}

export default Navbar;