import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Students from './Dashboard/Students/Students';
import Teachers from './Dashboard/Teachers/Teachers';

import Finance from './Dashboard/Finance/Finance';
import Homepage from './Dashboard/DashboardHome/HomePage/Homepage';
import AddNewSportStudent from './Dashboard/DashboardHome/SportStudent/AddNewSportStudent';
import AddNewExamTopper from './Dashboard/DashboardHome/ExamToppers/AddNewExamTopper';
import TeacherAddForm from './Dashboard/Teachers/TeacherAddForm';
import StudentAddForm from './Dashboard/Students/StudentAddForm';
import AddNewStudentForm from './Dashboard/DashboardHome/NewStudent/AddNewStudentForm';
import AddUnpadeStudentForm from './Dashboard/Finance/UnpaidStudent/AddUnpadeStudentForm';
import SchoolExpenseForm from './Dashboard/Finance/SchoolExpense/SchoolExpenseForm';


/* import Tests from './Dashboard/Tests/Tests';
import Personaldetails from './Dashboard/Tests/Personaldetails';
import CurrentIshue from './Dashboard/Tests/CurrentIshue'; */

function App() {
  return (
    <div className='bg-[#eef1f5]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard' element={<Homepage />} />

          <Route path='student' element={<Students />} />
          <Route path='teacher' element={<Teachers />} />
          <Route path='finance' element={<Finance />} />
          <Route path='newSportStudent' element={<AddNewSportStudent />} />
          <Route path='addExamTopper' element={<AddNewExamTopper />} />


          <Route path='newStudents' element={<AddNewStudentForm />} />
          <Route path='addStudent' element={<StudentAddForm />} />
          <Route path='addTeacher' element={<TeacherAddForm />} />
          <Route path='addUnpadeStudent' element={<AddUnpadeStudentForm />} />
          <Route path='addSchoolExpense' element={<SchoolExpenseForm />} />

          {/* <Route path='tests' element={<Tests />}>
            <Route path='Personal' element={<Personaldetails/>} />
            <Route path='currentIshue' element={<CurrentIshue/>} />
          </Route> */}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
