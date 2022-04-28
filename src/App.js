import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Conversations from './components/Conversations';
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { useState } from 'react';


function App() {

  const [usersList, setUsersList] = useState([]);
  console.log(usersList);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register changeUsersList={setUsersList}/>} />
        <Route path='/Conversations' element={<Conversations />} />
      </Routes>
    </Router>
  );
}

export default App;