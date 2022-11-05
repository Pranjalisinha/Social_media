import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Home from './pages/home/home';
import Register from './pages/Register&Login/Register';
import LogInUser from './pages/Login/Login';


function App() {
  return (
    <div className="App">
     <div className='blur' style={{top:'-18%', right: '0'}}></div>
     <div className='blur' style={{top: '36%', left:'-8rem'}}></div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Signin" element={<LogInUser/>}></Route>
      {/* <Route path="/Signin" element={<Registerpage/>}></Route> */}
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
