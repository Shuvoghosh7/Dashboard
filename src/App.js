import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import DashboardHome from './Dashboard/DashboardHome/DashboardHome';
import Students from './Dashboard/Students/Students';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='/dashboard' element={<DashboardHome/>}/>
  
        <Route path='student' element={<Students/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
