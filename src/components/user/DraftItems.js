import React from "react";
import { useState,useEffect } from "react";
import { Cookies, useCookies } from 'react-cookie';
import swal from 'sweetalert';

var DraftItems=(props)=>
{
      var [itemId,setItemId]=useState([{}]);
      const [cookies, setCookie] = useCookies(['admin']);
      var [item,setItem]=useState([{}]);
      var arr=[];
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
             s1.forEach((v1)=>{
                  arr.push(v1);  
             })
             console.log("arr setIds ");
             console.log(arr);
             
            }
            
            useEffect(()=>{
                  fun();
                  setItemId(arr);
   },[])

    var admins=[
        {
            shop_name:"sham daba",
            shop_address:"xxx",
            district:"mubarak",
            ratings:3, 

            admin_name:"nilesg",
            contactNo1:923,
            contactNo2:23324,
            emailadress:"xx.gmail.com",
            _id:"63a2f0c1621b1cacc8bb40a4"
           },
           {
            shop_name:"krishna daba",
            shop_address:"zzz",
            district:"mubarak",
            ratings:3, 
      
            admin_name:"manish lesg",
            contactNo1:2923,
            contactNo2:53324,
            emailadress:"xllax@gmail.com",
            _id:"639e00506435274db9d6ebbe"
           },
           {
            shop_name:"lala daba",
            shop_address:"yyy",
            district:"lalaubarak",
            ratings:2, 
      
            admin_name:"kamkesh lesg",
            contactNo1:2923,
            contactNo2:53324,
            emailadress:"ppaax@gmail.com",
            _id:"63a33804530cee5048524a0b"
           },
      ]

      console.log("hello ......");
      console.log("itemId");
      console.log(itemId);
      console.log(arr);

    return (
             <>
                        {itemId.map((i,no)=><DisplayDraft i={i} order={props.order} admin={props.admin}/>)} 
                        {/* {admns.map((i,no)=><DisplayDraft item={i} order={props.order} admin={props.admin}/>)}  */}
           
               </>

  );

}





var DisplayDraft= (props)=>{
//    if(props.item.length<1)return <></>;
//    var item=JSON.parse(props.item);
var [item,setItem]=useState({});

console.log(props); 
useEffect(()=>{
      console.log("draft fun called"+props.i);
      console.log(props.i); 
    getData();
},[])

var getData=async ()=>{

      try{
            var res=await fetch(`/user/shops/admin/${props.i}`,{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            var data=await res.json();
            console.log(" getdata funtions called");
            console.log(data);
            setItem(data[0]);
            console.log(data[0]._id);
            console.log(data[0].admin_name);

      }catch(e){
            console.log(e);
      }

  };

   
    return ( 
          <>
           <div className="container mt-5 bg-light p-0">
                <div className="row justify-content-cente my-4" key={item.admin_name+item.shop_address} >

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

                      <div className="col-md-1 align-center cursor" onClick={()=>{
                          props.order(false); 
                          console.log("clicked arrow");
                          props.admin(item._id);

                        }}>
                                <i class="fa-sharp fa-solid fa-angle-right fa-3x mt-5 pt-3"></i>
                      </div>
                 
                    </div>   
             </div>
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




export default DraftItems;