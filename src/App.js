import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Conversations from './components/Conversations';
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import { useState } from 'react';


function App() {

  var ariel = {
    userName: "Ariel Mantel",
    password: "1234",
    nickName: "Ariel",
    pictureProfile: "src/pictures/frog1.jpg"
  }

  var yosef = {
    userName: "Yosef Perelman",
    password: "1234",
    nickName: "Yosef",
    pictureProfile: "src/pictures/frog2.jpg"
  }

  const [usersList, setUsersList] = useState([ariel, yosef]);
  console.log(usersList);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login usersList={usersList} />} />
        <Route path='/Register' element={<Register changeUsersList={setUsersList} />} />
        <Route path='/Conversations' element={<Conversations />} />
      </Routes>
    </Router>
  );
}

export default App;