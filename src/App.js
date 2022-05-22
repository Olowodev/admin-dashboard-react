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


function App() {
  const admin = useSelector((state) => state.user.currentUser === null ? null : state.user.currentUser.isAdmin);
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
