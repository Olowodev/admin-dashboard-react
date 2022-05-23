import Navbar from '../../components/navBar/NavBar';
import Ordertable from '../../components/orderTables/Ordertable';
import { RegisteredUsers } from '../../data';

const Orders = () => {

    return (
        <div>
            <div>
                <Navbar page='Orders' />

                <Ordertable userData={RegisteredUsers} />
            </div>
        </div>
    );}

export default Orders;