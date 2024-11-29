import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import PlaceOrder from "./PlaceOrder";


var Order=(props)=>{
    
    var [list,setList]=useState(props.list);
    var [Place,setPlace]=useState(false);
    var [Q,setQ]=useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        var listitem=list.filter((i)=>i.admin==props.admin);
        setList(listitem);
        console.log(listitem);
        var arr=[];
        for(var i=0;i<listitem.length;i++){
                arr.push(1);
        }
        setQ(arr);
    },[]);
    
    console.log(Q);

    if(Place){
         return <PlaceOrder Q={Q} list={list} Place={setPlace} id={props.admin}/>
    }

    return (
            <>
                  <div className="container p-0 mb-3">
                     <div className="row mt-5 p-0 justify-content-center">

                                {list.map((data,i)=><ProductItem i={i} item={data} setQ={setQ} Q={Q}/>)}
                  </div>
                  </div>
                  <div className="container mb-5">
                        <div className="row justify-content-end">
                              <button className="bg-success text-light btn " onClick={()=>{
                                    //  navigate("/Order");
                                     console.log(Q);
                                     setPlace(true);
                              }}>Place Order</button>
                        </div>
                  </div>
            </>
        );
}


var ProductItem=(props)=>{
    var {item}=props;
    var [value,setVlaue]=useState(1);

    var alertBox=(id)=>{
        swal({
            title: "Do u Want to Remove from Draft?",
            text: "Once deleted, you will not be able to recover this imaginary Item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Item is  deleted!", {icon: "success",});
            //   deleteItem(id);
            } else {
              swal("Your item is safe!");
            }
          });
       }

    return (
            <>
                {/* <div className="row mt-5 bg-light p-0"> */}
                {/* <div className="col-md-5"> */}
                        <div className="col-md-2 col-10  p-0 m-0 bg-light mb-md-3 ml-md-1 ml-3 " onClick={()=>{
                                alertBox("do u want to delete");
                        }}>
                           <img src={"https://source.unsplash.com/1600x900/?"+item.ProductName} className="img-fluid w-100 h-100" />
                        </div>
                        <div className="col-md-3 col-10 bg-light mb-3 mr-md-2  ml-md-0 ml-3">
                              <h5 className="card-title font-short">{item.ProductName} </h5>
                                 <p className="text-dark">
                              <b>
                                  &#8377; {item.Price}  
                               </b>
                               </p> 
                               <h5 class="avali">Avaliable : {item.QautityAvailable}</h5>
                        {/* </div>
                        <div className="col-md-2"> */}
                                <h2 className="w-25 d-inline cursor" onClick={()=>{
                                  
                                    value<2?setVlaue(1):setVlaue(value-1);
                                           if(value<2)value=1;
                                            var arr=props.Q;
                                            arr[props.i]=value;
                                            props.setQ(arr);
                                            
                                        }}>-</h2>
                                <input type={"text"} value={value} size="1" className="w-5 mx-2 " disabled/>
                                <h2 className="w-25 d-inline cursor" onClick={()=>{
                                    setVlaue(value+1);
                                    var arr=props.Q;
                                    arr[props.i]=value+1;
                                    props.setQ(arr);
                                    
                                }}>+</h2>
                                <h5 className="mt-4 text-danger font">Total Amount : {item.Price*value}</h5>
                        {/* </div> */}
                                </div>
                {/* </div> */}
            
            </>
        );

}


export default Order;