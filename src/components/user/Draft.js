import React from "react";
import { useState,useEffect } from "react";
import { useCookies } from 'react-cookie';
import DraftItems from "./DraftItems";
import Order from "./order";




var Draft=(props)=>
{
      console.log("draft called")

      var [admins,setadmin]=useState([]);
      var [order,setOrder]=useState(true);
      var [item,setItem]=useState([{}]);
      var [adminId,setAdminId]=useState([{}]);
      var [itemId,setItemId]=useState([{}]);
      var [Alladmin,setAllAdmin]=useState([]);
      const [cookies, setCookie] = useCookies(['admin']);
      var [arr,setArr]=useState([]); 
      var [user,setuser]=useState([]); 
      var [str,setstr]=useState("");

      useEffect(()=>{

            var fun=async()=>{
            
            arr=[];
            try{
                  // console.log(`/user/draft/${cookies.user}`);
                var res=await fetch(`/user/getdraft/${cookies.user}`,{
                    method:"GET",
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    },
                    credentials:"include"
                });
            var d= await res.json();
            setItem(d);
            if(res.status!==200){
                  //   throw new Error("invalid data");
            }
            }catch(e){
                console.log("error in the res");
            }
            var s1=new Set();
            {
               d.map((j)=>{
                     s1.add(j.admin);
               })
            }
             var arr=[];
             s1.forEach((v1)=>{
                  arr.push(v1);  
             })
             console.log(arr);
             setItemId(arr);

            }

            fun();


            // setuser([]);
            // try{
            //       var res=await fetch(`/alladmin`,{
            //           method:"GET",
            //           headers:{
            //               Accept:"application/json",
            //               "Content-Type":"application/json"
            //           },
            //           credentials:"include"
            //       });
            //       var items=await res.json();
            //      var s="";
            //      for(var i=0;i<items.length;i++){
            //              for(var j=0;j<itemId.length;j++){
            //                   if(items[i]._id==itemId[j]){
            //                       s += JSON.stringify(items[i])+"xyz";
            //                   }
                        
            //              }
            //      }
            //      setstr(s);
            //      setCookie("adminList",s);
            //      setAllAdmin(user);
            //      console.log("Alladmin")
            //      console.log(str)
            //   }catch(e)
            //       {
                  
            //        } 
      
          


         },[]);


      return (
              <>
                  {order?<DraftItems str={str} id={itemId} Alladmin={Alladmin} order={setOrder} admin={setAdminId}/>:<Order id={itemId} order={setOrder} list={item} admin={adminId}/>}  
              </>
      )
}


var DisplayDraft=async(props)=>{
      console.log(props)
     var item={
      shop_name:"sham daba",
      shop_address:"xxx",
      district:"mubarak",
      ratings:3, 

      admin_name:"nilesg",
      contactNo1:923,
      contactNo2:23324,
      emailadress:"xx.gmail.com",
     };

      return ( 
            <>
                  {/* <div className="container mt-5 bg-light p-0">
                  <div className="row justify-content-cente"  >

                        <div className="col-md-4">
                              <img src={"https://source.unsplash.com/1600x900/?"+item.shop_name} className="img-fluid"/>
                        </div>

                        <div className="col-md-7 mt-2">
                              <h5 className="card-title">{item.shop_name}</h5>
                               <h5 className="address"><i class="fa-sharp fa-solid fa-location-dot fa-1x"></i> {item.shop_address} , {item.district}</h5>
                               <p className="lead">
                                  <h5 className="contact my-3"><i class="fa-solid fa-phone-volume"></i> {item.contactNo1} , {item.contactNo2} </h5>
                               </p>
                               <h4 className="my-3">
                                    <Reating count={item.ratings}/>
                              </h4>   
                        </div>

                        <div className="col-md-1 align-center cursor">
                                  <i class="fa-sharp fa-solid fa-angle-right fa-3x mt-5 pt-3"></i>
                        </div>
                   
                      </div>   
                   </div>  */}
             
            </>
      );



};

var Reating=(props)=>{
      var count=props.count;
      var array=[1,2,3,4,5];
      console.log(count);
       return (
            <>
                 {
                     array.map(element => {
                         return (element<=count?<i class="fa-solid fa-star text-warning fa-1x"></i>:<i class="fa-regular fa-star"></i>)
                     })
                  }
                 
            </>
       );
  
  };

export default Draft;