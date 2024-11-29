
import React, { useEffect, useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import swal from "sweetalert";
import { getImgUrl } from "../../display_components/Purches_display";
// import '../user/Purchase';

var DisplayShop=(props)=>{
    let navigate = useNavigate();
    var [Shops,setShops]=useState([]);

    // window.location.reload();
     useEffect(async()=>{
        try{
            var res=await fetch(`/user/shops`,{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
        var d= await res.json();
        console.log("shops are "+d);
        setShops(d);

        if(res.status!==200){
                throw new Error("invalid data");
        }
        }catch(e){
            console.log("error in the res");
        }
 
     },[])

    return (
            <>
                <div className="container">
                      <div className="row justify-content-center">
                                {
                                    Shops.map((items)=>{
                                          return <Shop_display myitem={items} setId={props.setId}  navigate={navigate}/>
                                    })
                                  }
                 
                               
                      </div>
              </div>
           </>
        )

};



const Shop_display = (props) => {
    var item=props.myitem;
    const [cookies, setCookie] = useCookies(['admin']);
    const [modalShow, setModalShow] = React.useState(false);

    // var item=props.myitem;
    var [path,setpath]=useState("");

    var getImg=async()=>{
        var pathVlau=await getImgUrl(item.shop_name);
        setpath(pathVlau);
    }
    
     useEffect(()=>{
        getImg()
     },[item]);

    return (
              <div className="col-md-4 my-4  rounded ">
                <div className="card hover">
                <img className="card-img-top  rounded" src={getImgUrl(path)} alt="Card image cap" />
                {/* <img className="card-img-top  rounded" src={`https://source.unsplash.com/1600x900/?shoppingmall${item.shop_name+""}`} alt="Card image cap" /> */}
                <div className="card-body ">
                     {/* <div className="w-25 h-25 align-center bg-danger">s</div> */}
                     <h5 className="card-title">{item.shop_name}</h5>
                       <div className="row justify-content-end mt-1 align-item-center">
                     {/* <h5 className="adminname"> <i class="fa-solid fa-user"></i> {item.admin_name}</h5> */}
                     </div>
                     <h5 className="address"><i class="fa-sharp fa-solid fa-location-dot fa-1x"></i> {item.shop_address} , {item.district}</h5>
                       <p><i class="fa-solid fa-envelope"></i> {item.emailadress}</p>
                      <h5 className="contact my-3"><i class="fa-solid fa-phone-volume"></i> {item.contactNo1} , {item.contactNo2} </h5>

                    <h4 className="my-3">
                        <Reating count={item.ratings}/>
                    </h4>   
                    <div className="row justify-content-end mt-1 align-item-center">
                           <button className="btn btn-success" onClick={()=>{
                               
                               
                                 swal({
                                  title: "Are you sure ?",
                                  icon: "success",
                                  buttons: true,
                                  dangerMode: true,
                                })
                                .then((willDelete) => {
                                  if (willDelete) {
                                      props.setId(item._id);
                                     setCookie('admin',item._id);
                                     setCookie('adminname',item.shop_name);
                                     props.navigate('/UserDisplay');
                                     window.location.reload();
                                  } else {
                  
                                  }
                                });
                                
                           }}>Shop Now</button>
                          
                    </div>
                   
                    {/* <div className="row justify-content-end mt-1 align-item-center">
                           <h5>
                              <i class="fa-solid fa-user"></i> {item.admin_name}
                          </h5>
                          
                    </div> */}
                </div>
                </div>
                </div>
     
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


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default DisplayShop;