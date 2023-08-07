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
import Chat from './Components/Chat';
import Browser from './Components/Browser';
import Contact from './Components/Contact';
import ManageUser from './Components/ManageUser';
import UpdateUser from './Components/UpdateUser';




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
          <Route path='Chat' element={<Chat/>}/>
          <Route path='Browser' element={<Browser/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='ManageUser' element={<ManageUser/>}/>
          <Route path='UpdateUser/:id' element={<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
