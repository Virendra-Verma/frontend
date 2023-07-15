import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div>   
      <Home></Home>
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
