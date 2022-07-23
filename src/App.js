import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import DashboardHome from './Dashboard/DashboardHome/DashboardHome';
import Students from './Dashboard/Students/Students';
import Teachers from './Dashboard/Teachers/Teachers';
import TotalCourse from './Dashboard/TotalCourse/TotalCourse';
import Events from './Dashboard/Events/Events';
import Finance from './Dashboard/Finance/Finance';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='/dashboard' element={<DashboardHome/>}/>
  
        <Route path='student' element={<Students/>}/>
        <Route path='teacher' element={<Teachers/>}/>
        <Route path='course' element={<TotalCourse/>}/>
        <Route path='events' element={<Events/>}/>
        <Route path='finance' element={<Finance/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
