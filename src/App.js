
import './App.css';
import {Route,Routes} from "react-router-dom";
import SignIn from './components/signin/Signin';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Screen from './components/screen/Screen';
import Cart from './components/cart/Cart';
import { useSelector } from 'react-redux';


 

function App() {
  
  const user = useSelector((state)=> state.logins)
  
  console.log("user==",user)
  return (
    <div className="App">
     <Routes>
      {
        user ? 
        ( 
          <>
          <Route exac path='/Screen' element={<Screen/>}/>
      <Route exac path='/Cart' element={<Cart/>}/>
          </>
        ):(
          <>
           <Route exac path="/" element={<SignIn />}/>
          </>
        )
       
      }
     <Route path="*" element={<div><h1>404 not found</h1></div>} />
      
     </Routes>
    </div>
  );
}

export default App;
