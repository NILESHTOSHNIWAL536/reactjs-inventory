import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

var AdminRegister=()=>{
    let navigate = useNavigate();
    var [myregister,setmyregister]=useState({
        shop_name:"",
        shop_address:"",
        district:"",
        ratings:0, 
        admin_name:"",
        contactNo1:0,
        contactNo2:0,
        emailadress:"",
        password:""
});
        var onchangedata=(e)=>{
            e.preventDefault();
        var  name=e.target.name;
        var  value=e.target.value;
            setmyregister({...myregister,[name]:value});
            // console.log(myregister);
        }

        var onRegister=async()=>{
            try{
                var res=await fetch("/admin",{
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
                    <form  action="" className="loginfor bg-dark p-3">
                    <div className="col-md-12">
                             <h2 className="ml-5 res text-light card-title">Admin Register</h2>
                 </div>
	     <label htmlFor="" className="text-light">Shop Name :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-user-alt fa-1x"></i></span>
                </div>
                 <input type="text" name="shop_name" className="form-control form-height" onChange={onchangedata}  autoComplete="off" placeholder="Enter Name"/>
            </div>

	    


            <label htmlFor="" className="text-light">Shop Address :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-location-dot fa-2x"></i></span>
                </div>
                <textarea  type="number" name="shop_address" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter Shop Address"/> 
            </div>

            <label htmlFor="" className="text-light">Admin Name :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-user-alt fa-1x"></i></span>
                </div>
                 <input type="text" name="admin_name" className="form-control form-height" onChange={onchangedata}  autoComplete="off" placeholder="Enter Name"/>
            </div>


		 <label htmlFor="" className="text-light">Number :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-phone-volume"></i></span>
                </div>
                <input type="number" name="contactNo1" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter Number1"/> 
            </div>

            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-phone-volume"></i></span>
                </div>
                <input type="number" name="contactNo2" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter Number2"/> 
            </div>

	
		 <label htmlFor="" className="text-light">District :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-house-user fa-1x"></i></span>
                </div>
                <input type="text" name="district" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter District"/> 
            </div>

            
		 <label htmlFor="" className="text-light">Email :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="far fa-envelope fa-1x"></i></span>
                </div>
                <input type="email" name="emailadress" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter Email"/> 
            </div>

		<label htmlFor="" className="text-light">password :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-lock fa-1x"></i></span>
                </div>
                <input type="text" show="*" name="password" className="form-control form-height" onChange={onchangedata} autoComplete="off" placeholder="Enter Password" />
            </div>


		 <label htmlFor="" className="text-light">conform password :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-lock fa-1x"></i></span>
                </div>
                   <input type="text" name="conform" className="form-control form-height " onChange={()=>{}} autoComplete="off" placeholder="Conform Password" />
            </div>
                <div class="form-group"> 
                     <button className="btn btn-danger col-md-3" onClick={(e)=>{
                        e.preventDefault();
                        onRegister();
                          console.log(myregister);
                     }}>Register</button>
                     <button className="btn btn-light col-md-3 ml-4" onClick={(e)=>{
                         e.preventDefault();
                         navigate("/adminLogin")
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


export default AdminRegister;