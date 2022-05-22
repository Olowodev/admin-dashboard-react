import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { useSelector } from "react-redux"
import RequireAuth from './requireAuth';
import Layout from './components/layout/Layout';
import Users from './pages/users/Users';
import Products from './pages/products/Products';


function App() {
  const admin = useSelector((state) => state.user.currentUser === null ? null : state.user.currentUser.isAdmin);
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Layout />}>
          <Route index element={<RequireAuth><Home /></RequireAuth>} />
          <Route path='users' element={<RequireAuth><Users /></RequireAuth>} />
          <Route path='products' element={<RequireAuth><Products /></RequireAuth>} />
        </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
