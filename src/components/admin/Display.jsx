
import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { getImgUrl } from "../../display_components/Purches_display";

var Display=(props)=>{
    
    let navigate = useNavigate();
    var [Product,setProduct]=useState([]);
    const [cookies, setCookie] = useCookies(['admin']);
    console.log(cookies.admin);
     useEffect(async()=>{
        try{
            console.log(`/admin/display/${cookies.admin}`);
            var res=await fetch(`/admin/display/${cookies.admin}`,{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
        var d= await res.json();
        console.log("res from api");
        console.log(d);

        d=d[0];
        console.log("d");
        setProduct(d.items);
        console.log("Product");
        console.log(d.items);
        console.log(Product);
        if(res.status!==200){
                throw new Error("invalid data");
        }
        }catch(e){
            console.log("error in the res"+e);
        }
 
     },[])
     console.log(Product.length);
     if(Product.length<=0){

        return  <h1>No Item To Display</h1>
   }

    return (
            <>
                <div className="container">
                      <div className="row justify-content-center">
                            
                                  {
                                     Product.map((items)=>{
                                          return <Purches_display myitem={items}/>
                                     })
                                  }
                
                      </div>
              </div>
           </>
        )

};





const Purches_display = (props) => {
    var item=props.myitem;
    var [path,setpath]=useState("");

    var getImg=async()=>{
        var pathVlau=await getImgUrl(item.ProductName);
        setpath(pathVlau);
    }
    
     useEffect(()=>{
        getImg()
     },[item]);
   
    return (
              <div className="col-md-4 my-4  rounded">
                <div class="card">
                {/* <img class="card-img-top" src={`/imgs/${item.img}`} alt="Card image cap" />//shadow-lg shadow-sm */}
                <img class="card-img-top  rounded" src={path} alt="Card image cap" />
                {/* <img class="card-img-top  rounded" src={`https://source.unsplash.com/1600x900/?${item.ProductName}`} alt="Card image cap" /> */}
                <div class="card-body">
                    <h5 class="card-title">{item.ProductName}</h5>
                    <h3>₹{item.Price}</h3>
                    <p className="lead">{item.ProductName} Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <h2 class="avali">Avaliable : {item.QautityAvailable}</h2>
                    <div className="row justify-content-end">

                    <button disabled={(item.QautityAvailable<=0)?true:false} class="btn btn-outline-warning bg-dark purchesbtn" id={`${item._id}`} onClick={()=>{
                    }}> Purchase Now </button>
                    </div>
                </div>
                </div>
                </div>
     
    );
};

export default Display;



