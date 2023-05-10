import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboardHD from './components/AdminDashboardHD';
import View from './crud/view';

import Edit from "./crud/edit";
import Add from "./crud/add";

function App() {
  return (

    <div className="App">
      <Router>
         <header />
        <Routes>
          <Route exact path="/" element={<AdminDashboardHD />} />
           <Route exact path="/view/:id" element={<View/>} />
            <Route exact path="/edit/:id" element={<Edit/>} />
            <Route exact path="/add" element={<Add />} />


          
        </Routes>

      </Router>
      
    </div>
    
  );
}

export default App;
