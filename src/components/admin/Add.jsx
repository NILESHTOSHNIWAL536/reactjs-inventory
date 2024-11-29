import React, { useState ,useEffect} from 'react';
import { useCookies } from 'react-cookie';
import swal from 'sweetalert';



const Add = (props) => {
    var Items=["","biscuit","Dal","fruits","IceCream","vegetables","soft drinks","snacks","Books and Pens","Rice","Wheat","chocolate","Others"];
    var getMYitem=props.getMYitem;
    const [cookies, setCookie] = useCookies(['admin']);
    useEffect(()=>{
        // window.location.reload(); 
    },[])

    var [MYdata,setdata]=useState({
            name:"",price:"",qun:"",type:""
    });

    var onchangedata=(e)=>{
        var name=e.target.name;
        var value=e.target.value;
        setdata({...MYdata,[name]:value})
        console.log(MYdata); 
    }
    
    var addMYitem=async (e)=>{
           e.preventDefault();
          { console.log(MYdata);}
          const {name,price,qun}=MYdata;
          var ProductName=name;
          var Price=price;
          var QautityAvailable=qun;
          try{
              var res=await fetch("/additem/"+cookies.admin,{
                  method:"POST",
                  headers:{
                      "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        ProductName,Price,QautityAvailable
                    })
                });
          const d=await res.json();
           if(d.status===422 ||  !d){
                 window.alert("invalid data");
           }else{
            // window.alert(`item ${name} is added `);
            swal(`item ${name} is added `);
            window.location.reload();
           }
        }catch(e){
            window.alert("error invalid");
            {console.log(e)}
        }
    }
    return (
        <div>
            <div className="container">
                   <div className="row justify-content-center">
                       <div className="col-6">
                       <form  className="mt-5 loginform" autoComplete="off" method="POST">
                                <div className="form-group">
                                    <label htmlFor="" className="text-light">ITEM NAME:</label>
                                    <input type="text" className="form-control" value={MYdata.name} name="name" onChange={onchangedata}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="text-light">ITEM TYPE:</label>
                                    <select class="form-control" aria-label="Default select example" name="type" value={MYdata.type} onChange={onchangedata}>
                                        {Items.map((data)=><option value={data}>{data}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="text-light">PRICE :</label>
                                    <input type="number" className="form-control" value={MYdata.price} name="price"  onChange={onchangedata}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="text-light">QUANTITY :</label>
                                    <input type="number" className="form-control"  value={MYdata.qun} name="qun"  onChange={onchangedata}/>
                                </div>
                                <div className="form-group mt-">
                                     <button className="btn btn-success ml-4 px-3 ml-4 px-5" type="button" onClick={addMYitem}>ADD ITEM</button>
                                     <button className="btn btn-danger ml-4 px-5 ml-4 px-5" type="reset" value="cancle" onClick={()=>{
                                        setdata({
                                            name:"",price:"",qun:""
                                    })
                                     }}>RESET</button>
                                </div>
                        </form> 
                        {/* <form method="GET">
                            <button onClick={getMYitem} className="btn btn-danger ml-4 px-5">click me to get data</button>
                        </form> */}
                       </div>
                   </div>
            </div>
        </div>
    );
};

export default Add;



// var getMYitem=async (e)=>{
//     e.preventDefault();
//    try{
//    var res=await fetch("/student",{
//        method:"GET",
//        headers:{
//            Accept:"application/json",
//            "Content-Type":"application/json"
//        },
//        credentials:"include"
//    });
//    const d=await res.json();
//    console.log(d);
//     if(!d.status===200){
//           window.alert("invalid data");
//     }else{
           
//     }
//  }catch(e){
//      window.alert("error invalid");
//      {console.log(e)}
//  }
// //  e.target.reset();
// }

// var getMYitem=async (e)=>{
//     e.preventDefault();
//    try{
//    var res=await fetch("/student/gooddaypack",{
//        method:"GET",
//        headers:{
//            Accept:"application/json",
//            "Content-Type":"application/json"
//        },
//        credentials:"include"
//    });
//    const d=await res.json();
//    console.log(d);
//     if(!d.status===200){
//           window.alert("invalid data");
//     }else{
           
//     }
//  }catch(e){
//      window.alert("error invalid");
//      {console.log(e)}
//  }
// }