import './Tickets.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUp, faFilter } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navBar/NavBar';
import Tickettables from '../../components/Tickettables/Tickettables';

const Tickets = () => {

    return (
        <div>
            <div>
                <Navbar page='Tickets' />

                <div className='ticket'>
                    <div className='header'>
                        <h1>All tickets</h1>
                        <div className='functions'>
                            <div className='function'>
                                <FontAwesomeIcon className='headerIcon' icon={faSortAmountUp} />
                                <p>Sort</p>
                            </div>
                            <div className='function'>
                                <FontAwesomeIcon className='headerIcon' icon={faFilter} />
                                <p>Filter</p>
                            </div>
                        </div>
                    </div>

                    <Tickettables />

                </div>
            </div>
        </div>
    );}

export default Tickets;