import './SideBar.css'
import { sidebarTabs} from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { logout } from '../../redux/apiCalls';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo1.png'


const Sidebar = ({pageNumber}) => {
    
    const [selected, setSelected] = useState(pageNumber);
    const dispatch = useDispatch()


    const logOut = () => {
        setSelected(sidebarTabs.map(tab => tab.sn).indexOf(6));
        logout(dispatch)
    }
    

    return (
        <div className='sidebar'>
            <div className='sidebarHeader'>
                <img style={{ width: 40, height: 40}} src={logo} alt='Company logo' />
                <p>THE DECALMASTERS</p>
            </div>

            <div className='sidebarTabCollection'>
                {sidebarTabs.map((tabs, index)=>(
                    <NavLink className={({isActive}) => isActive ? 'active' : undefined} key={index} to={tabs.link}>
                        <div className='sidebarTab' onClick={index===6?()=>logOut():()=>setSelected(index)} key={index}>
                            <FontAwesomeIcon className='sidebarTabIcon' icon={tabs.icon} />
                            <p>{tabs.text}</p>
                        </div>
                    </NavLink>
                ))}
            </div>

        </div>
    );
}

export default Sidebar;