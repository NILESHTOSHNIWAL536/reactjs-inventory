import React from 'react';
import { Login } from '../components/Form';
import  {Switch,Route} from "react-router-dom";
import Header from '../components/Header';
const Userlogined = (props) => {
    var setuserlogin=props.setuserlogin;
         return(
             <>
                   <Header/>
                    <Login setuserlogin={setuserlogin}/>            
             </>
         );
};

export default Userlogined;