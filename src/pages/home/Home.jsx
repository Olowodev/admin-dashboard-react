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

const Home = () => {


  return (
      <div className='home'>
        <Navbar page='Overview' />
        <div className='homecontainer'>
            
            <div className='homecontainerBody'>
                <div className='homecontainerHeader'>
                    <div className='welcomeCard'>
                        <div>
                            <h1>WELCOME STEPHEN!</h1>
                            <p>You have done 80% more sales than last month</p>
                        </div>
                        <img src={illus} alt="illustration" />
                    </div>

                    <div className='cards'>
                        <Card title='Users' value='60' icon={icon} percentage='+5%' />
                        <Card title='Users' value='60' icon={icon} percentage='+5%' />
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
                                {transactions.map((trans, index)=>(
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