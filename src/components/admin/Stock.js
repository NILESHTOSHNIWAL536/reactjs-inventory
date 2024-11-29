import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";


var Stock=()=>{
    
    let navigate = useNavigate();
    var [Product,setProduct]=useState([]);
    var [AllProduct,setAllProduct]=useState([]);
    var [Range,setRange]=useState(0);
    const [cookies, setCookie] = useCookies(['admin']);
    console.log(cookies.admin);
     useEffect(async()=>{
        try{
            var res=await fetch(`/admin/stock/${cookies.admin}`,{
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
        setAllProduct(d.items);
        var arr=d.items.filter((item)=>item.QautityAvailable<=0)
        console.log("d");
        setProduct(arr);
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
//      if(Product.length<=0){
//         console.log("Product length is");
//         console.log(Product);
//         return  <h1>No Item To Display</h1>
//    }


    var short=()=>{
           var arr=AllProduct.filter((item)=>item.QautityAvailable<=Range);
           setProduct(arr);
    }

    var onchangedata=(e)=>{
            console.log(Range);
            setRange(e.target.value);
            console.log(Range);
    }

    return  (
        <>
            <div className="container-fluid">
                  <div className="row justify-content-center my-3">
                        <div class="input-group mb-3 col-md-6">
                        <input type="number" className="form-control"  name="qun"  placeholder="Enter Number To Find Out of Stock Between The Range"  onChange={onchangedata}/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={short}>Search</button>
                    </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                            
                              {
                                 Product.map((items)=>{
                                      return <Stock_display myitem={items}/>
                                 })
                              }
            
                  </div>
          </div>
       </>
    )

}



const Stock_display = (props) => {
    var item=props.myitem;
    // var history=useHistory();
    return (
              <div className="col-md-3 my-4  rounded">
                <div class="card">
                {/* <img class="card-img-top" src={`/imgs/${item.img}`} alt="Card image cap" />//shadow-lg shadow-sm */}
                <img class="card-img-top  rounded" src={`https://source.unsplash.com/1600x900/?${item.ProductName}`} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.ProductName}</h5>
                    <h3>₹{item.Price}</h3>
                    <h2 class="avali">Avaliable : {item.QautityAvailable}</h2>
                    {/* <p className="lead">{item.ProductName} Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="row justify-content-end">

                    <button disabled={(item.QautityAvailable<=0)?true:false} class="btn btn-outline-warning bg-dark purchesbtn" id={`${item._id}`} onClick={()=>{
                    }}> Purchase Now </button> */}
                    {/* </div> */}
                </div>
                </div>
                </div>
     
    );
};


export default Stock;