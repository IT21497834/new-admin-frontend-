import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import View from './crud/view';
import AddStaff from './Staff/AddStaff';
import EditStaff from './Staff/EditStaff';
import ViewStaff from './Staff/ViewStaff';
import ViewAssignStaff from './components/ViewAssignStaff';
import AddStaffEvents from './AssignStaffEvents/AddStaffEvents';
import EditAssignStaff from './AssignStaffEvents/EditAssignStaff';
import ViewAssignStaffDetails from './AssignStaffEvents/ViewAssignStaffDetails';
import BookedEvents from './components/BookedEvents';
import Edit from "./crud/edit";
import Add from "./crud/add";

function App() {
  return (

    <div className="App">
      <Router>
         <header />
        <Routes>
          <Route exact path="/" element={<AdminDashboard />} />
           <Route exact path="/view/:id" element={<View/>} />
            <Route exact path="/edit/:id" element={<Edit/>} />
            <Route exact path="/add" element={<Add />} />

          {/* <Route exact path="/addstaff" element={<AddStaff />} />*/}
          {/*  <Route exact path="/editstaff/:id" element={<EditStaff />} />*/}
          {/*  <Route exact path="/viewstaff/:id" element={<ViewStaff />} />*/}

          {/*  <Route exact path="/viewAssignstaff" element={<ViewAssignStaff/>} />*/}
          {/*<Route exact path="/addstaffevents" element={<AddStaffEvents />} />*/}
          {/*<Route exact path="/editassignstaff/:id" element={<EditAssignStaff />} />*/}
          {/*<Route exact path="/viewassignstaffdetails/:id" element={<ViewAssignStaffDetails />} />*/}
          {/*<Route exact path="/bookedevents" element={<BookedEvents />} />*/}
          
          
        </Routes>

      </Router>
      
    </div>
    
  );
}

export default App;
