import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

var UserRegister=()=>{
    let navigate = useNavigate();
    var [myregister,setmyregister]=useState({
        username:"",
        home_address:"",
        contactNo:0,
        emailadress:"",
        password:"",
        district:""
});
        var onchangedata=(e)=>{
            e.preventDefault();
        var  name=e.target.name;
        var  value=e.target.value;
            setmyregister({...myregister,[name]:value});
        }

        var onRegister=async()=>{
            try{
                var res=await fetch("/user",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                      },
                      body:JSON.stringify(myregister)
                  });
            const d=await res.json();
             if(d.status===422 ||  !d){
                   window.alert("invalid data");
             }else{
              window.location.reload();
             }
          }catch(e){
              window.alert("error invalid");
              {console.log(e)}
          }
        }

   return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                
                    <div className="col-md-7">
                    <form  action="" className="loginfor bg-light text-dark p-2 px-3">
                    <div className="col-md-12">
                             <h2 className="ml-5 res text-light card-title text-dark">User Register</h2>
                 </div>
	     <label htmlFor="" className="text-light text-dark">Name :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-user-alt fa-1x"></i></span>
                </div>
                 <input type="text" name="username" className="form-control form-height" onChange={onchangedata}  autoComplete="off" placeholder="Enter Name"/>
            </div>


		 <label htmlFor="" className="text-light text-dark">Number :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-phone-volume"></i></span>
                </div>
                <input type="number" name="contactNo" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter number"/> 
            </div>

		 <label htmlFor="" className="text-light text-dark">Address :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-location-dot fa-1x"></i></span>
                </div>
                <textarea  type="number" name="home_address" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter Address"/> 
            </div>

		 <label htmlFor="" className="text-light text-dark">District :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-house-user fa-1x"></i></span>
                </div>
                <input type="text" name="district" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter District"/> 
            </div>

            
		 <label htmlFor="" className="text-light text-dark">Email :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="far fa-envelope fa-1x"></i></span>
                </div>
                <input type="email" name="emailadress" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter Email"/> 
            </div>

		<label htmlFor="" className="text-light text-dark">password :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-lock fa-1x"></i></span>
                </div>
                <input type="text" show="*" name="password" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter Password" />
            </div>


		 <label htmlFor="" className="text-light text-dark">conform password :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-lock fa-1x"></i></span>
                </div>
                   <input type="text" name="conform" className="form-control form-height " onChange={onchangedata} autoComplete="off" placeholder="Conform Password" />
            </div>
                <div class="form-group"> 
                     <button className="btn btn-danger col-md-3" onClick={(e)=>{
                            e.preventDefault();
                            onRegister();
                     }}>Register</button>
                     <button className="btn btn-dark col-md-3 ml-4" onClick={(e)=>{
                         navigate("/userLogin");
                        // swal("Good job!", "You clicked the button!", "success");
                     }}>login</button>
                </div>
</form>
           
         </div>
    </div>
    </div>
           
        </div>
    );

};


export default UserRegister;