import React from 'react'
import Navbar from '../../components/navBar/NavBar'
import './Home.css'
import Card from "../../components/card/Card";
import { transactions } from "../../data";
import Table from "../../components/table/Table";
import Chart from '../../components/chart/Chart'
import Piechart from '../../components/piechart/Piechart'
import illus from '../../images/rafiki.png'
import icon from '../../images/userRed.svg'
import vector from '../../images/vector.svg'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { userRequest } from '../../requestMethods';

const Home = () => {

    //const transactionsArray = false
    //const CLIENT_ID = "632568088361-u00opf4ej4mrqlf5s4rig5n1q9cdmqma.apps.googleusercontent.com"


  const user = useSelector((state) => state.user.currentUser === null ? null : state.user.currentUser);
  const [lastWeekUsers, setLastWeekUsers] = useState([])
  const [newUsers, setNewUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const[activeUser, setActiveUser] = useState({})

  ///* global google */
  useEffect(() => {

    /*const handleCredentialResponse = (res) => {
        console.log(res.credential)
    }

    google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
            { theme: "outline", size: "large"}
        );
        google.accounts.id.prompt();*/

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
    async function fetchNewUsers() {
        setLoading(true);
        try {
            const res = await userRequest.get('/user?new=true');
            const newUsers = res.data;
            setNewUsers(newUsers)
            console.log(newUsers)
            setLoading(false);
        } catch (err) {
            console.log(err)
            setLoading(false);
        }
    }
    async function fetchpreviousWeekUsers() {
        try {
            const res = await userRequest.get('/user/?pastweek=true');
            const previousUsers = res.data;
            setLastWeekUsers(previousUsers);
            console.log(previousUsers)
        } catch (err) {
            console.log(err)
        }
    }

    fetchNewUsers();
    fetchpreviousWeekUsers();
  }, [user._id])

  const percentageIncrease = Math.round(lastWeekUsers.length !== 0 ? ((newUsers.length - lastWeekUsers.length)/lastWeekUsers.length) * 100 : newUsers.length * 100);

  return (
      <div className='home'>
        <Navbar page='Overview' />
        <div className='homecontainer'>
            
            <div className='homecontainerBody'>
                <div className='homecontainerHeader'>
                    <div className='welcomeCard'>
                        <div>
                            <h1>{`WELCOME ${user.firstname.toUpperCase()}!`}</h1>
                            <p>You have done 80% more sales than last month</p>
                        </div>
                        <img src={illus} alt="illustration" />
                    </div>

                    <div className='cards'>
                        <Card title='Users' loading={loading} value={loading ? <div className='ldsring'><div></div></div> : newUsers.length} icon={icon} percentage={percentageIncrease + '%'} />
                        <Card title='Orders' loading={loading} value={loading ? <div className='ldsring'><div></div></div> : 60} icon={icon} percentage='+5%' />
                    </div>
                </div>

                <div className='charts'>
                    <div className='piechartCard'>
                        <p className='piechartHeader'>TOTAL REVENUE</p>
                        <div className='piechartImg'>
                            <Piechart />
                        </div>
                        <p className='piechartSubhead'>Total sales made today</p>
                        <p className='total'>$ 1900</p>
                        <div className='categories'>
                            <div className='category'>
                                <div className='categoryLeft'>
                                    <div className='categoryLogo'>
                                        <img src={vector} alt="piechart" />
                                    </div>
                                    <div className='categoryName'>
                                        <p>VINYL</p>
                                        <p className='categoryDesc'>Banner Design</p>
                                    </div>
                                </div>
                                <p className='categoryAmount'>$ 973</p>

                                
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className='chartContainer'>
                        <p>Last 5 Months (Revenue)</p>
                        <Chart />
                    </div>
                </div>

                <div className='transContainer'>
                    <h1>LATEST TRANSACTIONS</h1>
                    <div className='transTable'>
                        <table className='transTableTag'>
                            <thead>
                                <tr>
                                    <th>Tracking ID</th>
                                    <th>Product</th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Payment Method</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                { transactions.map((trans, index)=>(
                                    <Table key={index} trackingId={trans.trackingId} pp={trans.pp} product={trans.productname} customer={trans.customer} date={trans.date} amount={trans.amount} paymentMethod={trans.paymentmethod} status={trans.status} />
                                ))}
                            </tbody>
                              
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Home