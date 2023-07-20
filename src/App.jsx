import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import EventHandling from './Components/EventHandling';
import StateManagement from './Components/StateManagement';
import Todo from './Components/Todo';

function App() {
  return (
    <div> 
       <BrowserRouter>
       <Navbar/>
      
     
        <Routes>
         <Route path='/' element={<Navigate to ='/Home'/>}/>
          <Route path='Home' element={<Home/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Signup' element={<Signup/>}/>
          <Route path='Event' element={<EventHandling/>}/>
          <Route path='State' element={<StateManagement/>}/>
          <Route path='todo' element={<Todo/>}/>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
