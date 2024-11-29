
import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';


var Update=(props)=>{
    const [cookies, setCookie] = useCookies(['admin']);
    console.log("props.user_id");
        console.log(props);
        console.log(props.user_id);
        console.log( "user_id admin cookes");
        console.log( cookies.admin);
    var [Product,setProduct]=useState([]);
    var [ProductItem,setProductItem]=useState({});
    var [update,setUpdated]=useState(false);
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
            console.log("error in the res"+e);
        }
 
     },[])

     if(Product.length<=0){
          return <h1>No Item to Display</h1>
     }

     if(update){
        return <MYupdate setUpdated={setUpdated} id={ProductItem._id} user_id={cookies.admin} ProductName={ProductItem.ProductName}  Price={ProductItem.Price}  QautityAvailable={ProductItem.QautityAvailable}/>
     }

    return (
            <>
                <div className="container-fluid">
                      <div className="row justify-content-center">
                            
                                  {
                                     Product.map((items)=>{
                                          return <UpdateDisplay myitem={items} setProduct={setProduct} user_id={props.user_id} setProductItem={setProductItem} setUpdated={setUpdated}/>
                                     })
                                  }
                
                      </div>
              </div>
           </>
        )

};








const UpdateDisplay = (props) => {
   var item=props.myitem;
    return (
              <div className="col-md-3 my-4  rounded">
                <div className="card">
                {/* <img class="card-img-top" src={`/imgs/${item.img}`} alt="Card image cap" />//shadow-lg shadow-sm */}
                <img className="card-img-top  rounded" src={`https://source.unsplash.com/1600x900/?${item.ProductName}`} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{item.ProductName}</h5>
                    <h3>₹{item.Price}</h3>
                    <div className="row justify-content-end">
                      <button  className="btn btn-success align-left purchesbtn" id={`${item._id}`} onClick={()=>{
                            props. setProductItem(item);
                            props. setUpdated(true);
                        }}> update </button>

                    </div>
            
                </div>
                </div>
                </div>
     
    );
};


const MYupdate = (props) => {
    var [up_data,setup_data]=useState({
        name:props.ProductName,price:props.Price,qun:props.QautityAvailable
    });
    var onchangedata=(e)=>{
         var e=e.target;
         setup_data({...up_data,[e.name]:e.value,})
    }
    var updateitemhere=async (e)=>{
        try{
            var {name,price,qun}=up_data;
            var ProductName=name;
            var Price=price;
            var QautityAvailable=qun;
            var res=await fetch(`/admin/${props.user_id}/${props.id}`,{
                method:"PATCH",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    ProductName,Price,QautityAvailable
                })
            });
            const d=await res.json();
            console.log(d);
             if(!d.status===200){
                   window.alert("invalid data");
             }else{
                 alert(`${up_data.name} is updated successfully`);
                }
            }catch(e){
                //   window.alert("error invalid");
                //   {console.log(e)}
            }
          window.location.reload();
    }
    return (
        <div>
            <div className="container" >
                  
                   <div className="row justify-content-center">
                       <div className="col-md-12 text-center mt-5 text-danger ">
                             <h3>UPDATE ITEM </h3>
                       </div>
                       <div className="col-md-6">
                       <form  className="mt-5" autoComplete="off">
                                <div className="form-group">
                                    <label htmlFor="">ITEM NAME:</label>
                                    <input type="text" className="form-control"  name="name"  readonly value={up_data.name} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">PRICE :</label>
                                    <input type="number" className="form-control"  name="price" onChange={onchangedata} value={up_data.price}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">QUANTITY :</label>
                                    <input type="number" className="form-control" min="1" max={up_data.qun}   name="qun" onChange={onchangedata} value={up_data.qun}/>
                                </div>
                                <div className="form-group mt-">
                                     <button className="btn btn-danger ml-5 px-3 col-5" type="button" onClick={updateitemhere}>Update</button>
                                </div>
                        </form> 
            </div>
            </div>
            </div>
        </div>
    );
};






export default Update;