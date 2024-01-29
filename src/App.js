
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import {Link } from "react-router-dom";
import { Route,Routes } from 'react-router';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Create</Link></li>
        <li><Link to="/read">read</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' index element={<Create/>}/>
      <Route path='/read' element={<Read/>}/>
    </Routes>
    </>
  );
}

export default App;


       
