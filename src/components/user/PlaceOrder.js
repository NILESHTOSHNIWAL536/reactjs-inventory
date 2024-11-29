import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useCookies } from 'react-cookie';


var PlaceOrder=(props)=>{
    let navigate = useNavigate();
    console.log("list of items avaliable");
    console.log(props);
    const [cookies, setCookie] = useCookies(['admin']);
    // var list=props.list;
    // var Q=props.Q;
    var [list,setlist]=useState(props.list);
    var [Q,setQ]=useState(props.Q);
    if(list.length==0)props.Place(false);
    var [amount,setAmo]=useState(0);
    var [user_p,Setuser_p]=useState({});


     var getPerson=async()=>{
    try{
      var res=await fetch(`/user/${cookies.user}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
      });
     var d= await res.json();
     console.log(d);  
     Setuser_p(d);
        }catch(e){
                console.log("error while getting user");
            }
     }


    useEffect(()=>{
        var sum=0;
        for(var i=0;i<Q.length;i++){
            sum += Q[i]*list[i].Price;
        }
        setAmo(sum);
        getPerson();

    },[])


    var insertData=async()=>{
      console.log("props.id");
      console.log(list);
      var admin_id=props.id;
      var persons={
        admin_id:admin_id,
        persons:[
                {
                user_name:user_p.username,
                email:user_p.emailadress,                
                contact:user_p.contactNo,
                address:user_p.home_address,
                items:list 
                }  
              ]                 
    } ;

      try{
        var res=await fetch("/addorder/"+props.id,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                 persons
              })
          });
            const d=await res.json();
            console.log(d);
            console.log(res);
            if(d.status===422 ||  !d){
                  window.alert("invalid data");
            }else{
              // window.alert(`item ${name} is added `);
              swal(`item ${"order"} is added `);
              // window.location.reload();
            }
          }catch(e){
              window.alert("error invalid");
              {console.log(e)}
          }

    }


 return (
          <>
                <div className="container">
                       <div className="row justify-content-center mt-5">
                             <div className="col-md-11 b-light">

                                <table className="table table-bordered table-hover">
                                <thead className="table-dark">
                                        <tr className="">
                                                <th>S.No</th>
                                                <th>ProductName</th>
                                                <th>Price</th>
                                                <th>Qautity Purchased</th>
                                                <th>Amount</th>
                                                <th>Delete</th>
                                        </tr>
                                </thead>
                                <tbody className="bg-light">
                                        {
                                            list.map((item,i)=><RowItem prod={item} Q={Q} setQ={setQ} i={i} setlist={setlist} list={props.list}/>) 
                                        }
                                </tbody>
                                <tfoot className="bg-dark text-light">
                                       <tr>
                                           <td colSpan={4}>
                                              Total Amount
                                           </td>
                                           <td colSpan={1}>
                                               {amount}
                                           </td>
                                           <td className="bg-success cursor bg-outline-warning text-light" onClick={
                                            ()=>{
                                                  console.log("done")
                                                  
                                                  swal({
                                                    title: "Are you sure?",
                                                    text: "Once placed, you will not be able to cancle the order!",
                                                    icon: "warning",
                                                    buttons: true,
                                                    dangerMode: true,
                                                  })
                                                  .then((willDelete) => {
                                                    if (willDelete) {
                                                      swal("Thank You ! Your Order will de delived in 30 min", {
                                                        icon: "success",
                                                    });
                                                    insertData();
                                                    // navigate("/shops");  
                                                    } else {
                                                      swal("order is not Placed !");
                                                    }
                                                  });
                                            }
                                           }>
                                                 Order Now
                                           </td>
                                       </tr>
                                </tfoot>
                            </table>
                             
                             </div>
                       </div>
                </div>
                
          </>
    );

}


var RowItem=(props)=>{

   var list=props.prod;
    return (
                <>
                          <tr>
                               <td>{props.i+1}</td>
                               <td>{list.ProductName}</td>
                               <td>{list.Price}</td>
                               <td>{props.Q[props.i]}</td>
                               <td>{list.Price*props.Q[props.i]}</td>
                               <td><i class="fa fa-trash fa-1x cursor text-danger" aria-hidden="true"
                                onClick={()=>{
                                      // var q=[];
                                      // var l=[];
                                      // for(var j=0;j<props.list.length;j++){
                                      //      if(j!=props.i){
                                      //       q.push(props.Q[j]);
                                      //       l.push(props.list[j]);
                                      //      }
                                      // }
                                      // props.setQ(q);
                                      // props.setlist(l);
                                }}
                               
                               ></i></td>
                          </tr>
                </>
        )

}


export default PlaceOrder;