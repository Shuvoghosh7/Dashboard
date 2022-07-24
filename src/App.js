import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Students from './Dashboard/Students/Students';
import Teachers from './Dashboard/Teachers/Teachers';
import TotalCourse from './Dashboard/TotalCourse/TotalCourse';
import Events from './Dashboard/Events/Events';
import Finance from './Dashboard/Finance/Finance';
import Homepage from './Dashboard/DashboardHome/HomePage/Homepage';
import AddNewSportStudent from './Dashboard/DashboardHome/SportStudent/AddNewSportStudent';
import AddNewExamTopper from './Dashboard/DashboardHome/ExamToppers/AddNewExamTopper';
function App() {
  return (
    <div className='bg-[#eef1f5]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='/dashboard' element={<Homepage/>}/>
  
        <Route path='student' element={<Students/>}/>
        <Route path='teacher' element={<Teachers/>}/>
        <Route path='course' element={<TotalCourse/>}/>
        <Route path='events' element={<Events/>}/>
        <Route path='finance' element={<Finance/>}/>
        <Route path='newSportStudent' element={<AddNewSportStudent/>}/>
        <Route path='addExamTopper' element={<AddNewExamTopper/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
