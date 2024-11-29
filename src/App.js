
import { Routes, Route } from "react-router-dom";
import Header from './components/admin/Header';
import './App.css';
import Add from './components/admin/Add';
import Display from './components/admin/Display';
import Delete from './components/admin/Delete';
import Update from './components/admin/UpdateDisplay';
import DisplayShop from './components/user/Shops.js';
import { useEffect, useState } from 'react';
import HeaderUser from './components/user/Headeruser';
import UserDisplay from './components/user/Purchase';
import HeaderOwn from './HeaderOwn';
import UserLogin from './SignInUp/userLogin';
import AdminLogin from './SignInUp/AdminLogin';
import UserRegister from './SignInUp/userRegi';
import AdminRegister from './SignInUp/AdminRegi';
import Home from './Home';
import Stock from './components/admin/Stock';
import HeaderOwn2 from "./Headers/Ownerheader";
import Draft from "./components/user/Draft";
import PlaceOrder from "./components/user/PlaceOrder";
import OrderDisplay from "./components/admin/orderdisplay";
// import { Cookies } from "react-cookie";
import { useCookies } from 'react-cookie';


function App() {
 var [userId,setId]=useState("");
 var [Alladmin,setAllAdmin]=useState([]);
 const [cookies, setCookie] = useCookies(['admin']);

 var adminfound=(user_id)=>{
     console.log("App js founded admin called for sele");
     setId(user_id);
     window.location.reload();
 }



  return (

    <div className="App">
             {/* <HeaderOwn2/> */}
              <Routes>
                  {/* Owner */}
                  
                  <Route path="/" element={<><HeaderOwn/> <Home/></>} />
                  <Route path="/adminLogin" element={<> <HeaderOwn/> <AdminLogin/></>} />
                  <Route path="/adminRegi" element={<> <HeaderOwn/><AdminRegister/></>} />
                  <Route path="/userLogin" element={<> <HeaderOwn/><UserLogin/></>} />
                  <Route path="/userRegi" element={<> <HeaderOwn/><UserRegister/></>} />

                  
                  {/* admin */}
                  <Route path="/admin/Home"   element={<><Header/> <Home/></>} />
                  <Route path="/additem"      element={<><Header/><Add  user_id={userId}/></>} />
                  <Route path="/displayitems" element={<><Header/><Display user_id={userId} /> </>} />
                  <Route path="/deleteitem"   element={<><Header/><Delete user_id={userId}/></>} />
                  <Route path="/updateitem"   element={<><Header/><Update user_id={userId}/></>} />
                  <Route path="/outofstock"   element={<><Header/><Stock user_id={userId}/></>} />
                  <Route path="/OrderDisplay"  element={<><Header/><OrderDisplay/></>} />

                   {/* user */}
                  <Route path="/user/Home" element={<><HeaderUser/><Home/></>} />  
                  <Route path="/shops" element={<><HeaderUser/> <DisplayShop setId={adminfound}/></>} />  
                  <Route path="/UserDisplay"  element={<><HeaderUser/><UserDisplay  user_id={userId}/></>} />
                  <Route path="/Draft"  element={<><HeaderUser/><Draft  all_admin={Alladmin}/></>} />
                  <Route path="/Order"  element={<><HeaderUser/><PlaceOrder/></>} />

              </Routes> 
      </div>
  );
}

export default App;
