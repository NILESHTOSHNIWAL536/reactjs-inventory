import React, { useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';


var person="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60";


var OrderDis=()=>{

    var [show,setshow]=useState(false);
    var [order,setOrder]=useState([]);
    var [items,setItems]=useState([]);
    const [cookies, setCookie] = useCookies(['admin']);



    var Data=async()=>{

                    try{
                var res=await fetch(`/admin/orderNo/${cookies.admin}`,{
                    method:"GET",
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    },
                    credentials:"include"
                });
                var d= await res.json();
                console.log("order by customer shown here");  
                setOrder(d.order); 
                console.log(order);  
                }catch(e){
                    console.log('error while fetching order');
                }


     }

     useEffect(()=>{
        Data();
     },[])


      if(show){
                return (
                        <>
                            <DisplayPersonOrder items={items} />
                        </>
                )

        }

    

    return (
            <>
                     {order.map((i)=><OrderDisplay data={i} setshow={setshow} setItems={setItems}/>)}
            </>
        );
}


var OrderDisplay=(props)=>{
    var {user_name,email,contact,address,items}=props.data;

   

    return (<>
                  <div className='container bg-light mt-5 p-0 my-2'>
                      <div className='row border border-dark p-0 m-0'>
                           <div className='col-md-2 p-0'>
                               <img src={"https://source.unsplash.com/1600x900/?user"} className="w-100 h-100 img-fluid rounded"/>
                           </div>
                           <div className='col-md-5 p-2 pl-3'>
                                     <h1 className='card-title'>{user_name}</h1>
                                     <h4><i class="fa-sharp fa-solid fa-envelope mr-2"></i>{email}</h4>
                                     <p>03/02/2022</p>
                           </div>
                           <div className='col-md-4'>
                                        <h5 className="contacxt my-3"><i class="fa-solid fa-phone-volume"></i> {contact}  </h5>
                                        <h5 className="contacxt my-3"><i class="fa-sharp fa-solid fa-location-dot"></i> {address}  </h5>
                                
                           </div>
                           <div className="col-md-1 pt-5 pl-2 bg-darkh ">
                                    {/* <i class="cursor fa-solid fa-trash mx-3 text-danger fa-2x"></i> */}
                                    <i class="cursor fa-solid fa-chevron-right  mx-3  fa-2x" onClick={()=>{
                                        props.setItems(items);
                                        props.setshow(true);
                                    }}></i>
                           </div>
                      </div>
                  </div>
            
           </>
        );

}


var DisplayPersonOrder=(props)=>{
  
    var data=props.items;

    console.log(data);

  return (
           <>
         
           </>
        );

}

export default OrderDis;

