
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminLogin from './component/adminLogin';
import UserLogin from './component/userLogin';
import LandingPage from './component/landingPage';

import AdminPortal from './component/adminPortal';
import UserPortal from './component/userPortal';
import PageNotFound from './component/404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}  /> 
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/admin/*' element={<AdminPortal/>}/>
        <Route path='/user/*' element={<UserPortal/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
