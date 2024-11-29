
import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import swal from "sweetalert";

var Delete=(props)=>{
    const [cookies, setCookie] = useCookies(['admin']);
    console.log("props.user_id");
    console.log(props.user_id);
    var [Product,setProduct]=useState([]);
     useEffect(async()=>{
        try{
            var res=await fetch(`/admin/display/${cookies.admin}`,{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
        var d= await res.json();
        d=d[0];
        console.log("d");
        console.log(d);
        console.log(d.items);
        setProduct(d.items);

        if(res.status!==200){
                throw new Error("invalid data");
        }
        }catch(e){
            console.log("error in the res");
        }
 
     },[])

    
     if(Product.length<=0){
        return <h1>No Item to Display</h1>
      }

    return (
            <>
                <div className="container-fluid">
                      <div className="row justify-content-center">
                            
                                  {
                                     Product.map((items)=>{
                                          return <Delete_display cookies={cookies} myitem={items} setProduct={setProduct} user_id={props.user_id}/>
                                     })
                                  }
                
                      </div>
              </div>
           </>
        )

};








const Delete_display = (props) => {
  
   var item=props.myitem;


   var alertBox=(id)=>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary Item!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Item is  deleted!", {icon: "success",});
          deleteItem(id);
        } else {
          swal("Your item is safe!");
        }
      });
   }


 var   deleteItem =async(id) =>{
    try{
        var res=await fetch(`/admin/${props.cookies.admin}/${id}`,{
            method:"DELETE",
            headers:{
               Accept:"application/json",
               "Content-Type":"application/json"
           },
           credentials:"include"
        });
         var d=await res.json();
        console.log(d);
         if(!d.status===200){
               window.alert("invalid data");
         }
      }catch(e){
          window.alert("error cannot dele data....");
      }
      window.location.reload();
}
   

    return (
              <div className="col-md-3 my-4  rounded">
                <div class="card">
                {/* <img class="card-img-top" src={`/imgs/${item.img}`} alt="Card image cap" />//shadow-lg shadow-sm */}
                <img class="card-img-top  rounded" src={`https://source.unsplash.com/1600x900/?${item.ProductName}`} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.ProductName}</h5>
                    <h3>₹{item.Price}</h3>
                    <div className="row justify-content-end">
                      <button  class="btn btn-danger align-left purchesbtn" id={`${item._id}`} onClick={()=>{
                                alertBox(item._id);
                                //  deleteItem(props.user_id,item._id);
                        }}> Delete </button>
                        
                    </div>
            
                </div>
                </div>
                </div>
     
    );
};

export default Delete;