import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import swal from "sweetalert";
// import * as EmailValidator from 'email-validator';
// EmailValidator.validate("test@email.com"); // true
 

var AdminLogin=()=>
{
    var [logindetailes,setDetails]= useState({email:"",password:""});
    const [ cookies, setCookie] = useCookies(['admin']);

    let navigate = useNavigate();

    var onchangedata=(e)=>{
        e.preventDefault();
        var  name=e.target.name;
        var  value=e.target.value;
        setDetails({...logindetailes,[name]:value});
    }

    var login=async()=>
    {
        try{
            var res=await fetch(`/user/${logindetailes.email}/${logindetailes.password}`,{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
        console.log(res);
         var d= await res.json();
        // console.log(d.length);
        // console.log(d);

        if(d.length==0){
              swal("Invalid credentials");
        }else{
            console.log(d[0]._id);
            setCookie("admin",d[0]._id);
            setCookie("user",d[0]._id);
            swal("Good job!", "Welcome Back!", "success");
            navigate("/user/Home");
        }
        
        if(res.status!==200){
                throw new Error("invalid data");
        }
        }catch(e){
            console.log("error in the res");
        }

    };
   
    
    return(
            <>
 <div>
            
            <div className="container mt-5">
               <div className="row justify-content-center">
                   <div className="col-md-6">
          <form  autoComplete="off" className="loginfor p-3 bg-light text-dark mt-5">
          <div className="col-md-13 mb-3">
                         <h2 className="res text-light text-center ml-5 card-title text-dark">User Login page</h2>
           </div>
           <label htmlFor="" className="text-light text-dark">Enter Email:</label>
           <div class="input-group mb-4">
               <div class="input-group-prepend">
                   <span class="input-group-text"><i class="fas fa-envelope-open-text fa-2x"></i></span>
               </div>
               <input type="text" className="form-control form-height" size="10" id="emailed" name="email" onChange={onchangedata}  autoComplete="off" placeholder=" Enter Email"/>
           </div>

           <label htmlFor=""  className="text-light text-dark">password :</label>
           <div class="input-group mb-2">
               <div class="input-group-prepend">
                   <span class="input-group-text"><i class="fas fa-lock fa-2x"></i></span>
               </div>
               <input type="text" className="form-control form-height" name="password" onChange={onchangedata} autoComplete="off" placeholder="Enter Password"/>
           </div>

           <div className="my-1 mx-4">
                 <div className="row ">
                      <input type={"checkbox"} className="mx-2"/>
                      <p className="mt-3 text-dark">Remember me</p>
                 </div>
            </div>
              
                            

               <div class="form-group"> 
                    <button className="btn btn-dark col-md-4 mr-3 text-light" onClick={(e)=>{
                          e.preventDefault();
                          login();
                    }}>login</button>
                    <button className="btn btn-danger col-md-4 ml-3 float-rigth text-light" onClick={(e)=>{
                          e.preventDefault();
                          navigate("/userRegi")
                    }}>Register</button>
               </div>
          </form>
       </div>
       </div>
       </div>
       </div>

            </>
        );

};


export default  AdminLogin;