import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import RequireAuth from './requireAuth';
import Layout from './components/layout/Layout';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Orders from './pages/orders/Orders';
import Tickets from './pages/tickets/Tickets';
import Invoices from './pages/invoices/Invoices';
import NewInvoice from './pages/newInvoice/NewInvoice';


function App() {
  return (
    <div className='app'>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Layout />}>
          <Route index element={<RequireAuth><Home /></RequireAuth>} />
          <Route path='users' element={<RequireAuth><Users /></RequireAuth>} />
          <Route path='products' element={<RequireAuth><Products /></RequireAuth>} />
          <Route path='orders' element={<RequireAuth><Orders /></RequireAuth>} />
          <Route path='tickets' element={<RequireAuth><Tickets /></RequireAuth>} />
          <Route path='invoices' element={<RequireAuth><Invoices /></RequireAuth>} />
          <Route path='/invoices/new' element={<RequireAuth><NewInvoice /></RequireAuth>} />
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
