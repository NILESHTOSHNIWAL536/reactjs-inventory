
import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
// import Modal from 'react-modal';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SlideBar from "./Slider";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className+" text-bold" }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));


var UserDisplay=(props)=>{
    let navigate = useNavigate();
    var [Product,setProduct]=useState([]);
    const [cookies, setCookie] = useCookies(['admin']);

    console.log("props.user_id displaypage");
    console.log(cookies.admin);
    var s=cookies.admin.toString();
    console.log(typeof cookies.admin);
     useEffect(async()=>{
        if(cookies.admin.length==0){
            swal("please selete the shop!")
                .then((value) => {
                    navigate("/shops");
                    window.location.reload();
                });
        }
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
        setProduct(d.items);
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
     if(Product.length<=0){
      //  swal({
      //    title: "No Items To Display?",
      //    text: "Items may be out of stock or shop nas been removed!",
      //    icon: "warning",
      //   dangerMode: true,
      // })
      // .then((willDelete) => {
      //   if (willDelete) {
      //     swal("Poof! Your imaginary file has been deleted!", {
      //       icon: "success",
      //     });
      //     navigate("/shops");
      //     window.location.reload();
         
      //   } else {
      //     swal("Your imaginary file is safe!");
      //     navigate("/shops");
      //     window.location.reload();
      //   }
      // });

      // swal("Items may be out of stock or shop nas been removed!")
      //           .then((value) => {
      //               navigate("/shops");
      //               window.location.reload();
      //           });
      
      return <h1>No Item To Display</h1>
     
      }

    return (
            <>
                <div className="container"> 
                      <div className="row">
                         <SlideBar/>
                      </div>
                      <div className="row justify-content-center">
                            
                                  {
                                     Product.map((items)=>{
                                          return <Purches_display myitem={items}/>
                                     })
                                  }
                
                      </div>
              </div>
           </>
        )

};


function MyVerticallyCenteredModal(props) {
  console.log(props);
  var {item}=props; 
  var [modelopen,setmodelopen]=useState(false);
  var [Amount,setAmount]=useState(item.Price);
  const [cookies, setCookie] = useCookies(['admin']);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-aos-offset="10"
     
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <Modal.Header closeButton>
                                  <h5 className="col-md-8 card-title">{cookies.adminname}</h5>
  
      </Modal.Header>
      <Modal.Body>
      <div className="row   mx-2 my-0 p-0">
                                 <div className="col-md-5 mb-1">
                                     <img class="card-img-top pt-3  rounded" data-aos="zoom-in" data-aos-delay="1000" src={`https://source.unsplash.com/1600x900/?${item.ProductName}`} alt="Card image cap" />
                                 </div>
                                 <div className="col-md-6 mb-3 mx-2">
                                       <h5 class="card-title" data-aos="zoom-out">{item.ProductName}</h5>
                                       <h3>₹{item.Price}</h3>
                                      <div className="form-group row mt-2">
                                          <label htmlFor="" className="col-md-5 text-dark"> <h5>QUANTITY : </h5></label>
                                          <input type="number" min={1} max={item.QautityAvailable}  className="col-md-7 form-control" name="qun"  onChange={(e)=>{
                                              setAmount(item.Price*e.target.value);
                                          }}/>
                                      </div>
                                      {/* <div>Amount :{Amount}</div> */}
                                      <h3>Amount : ₹{Amount}</h3>
                                 </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      <div className="row justify-content-end mt-3 mr-2">
               <button className="btn btn-success mr-2"> + Add More</button> 
               {/* <button className="btn btn-secondary" onClick={props.onHide}>close</button>  */}
              <button className="btn btn-danger">Buy Now</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}



const Purches_display = (props) => {
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', 
  });
    var item=props.myitem;
    item.id=props.myitem._id;
    console.log("draft items");
    console.log(item);
    var bar=item.ProductName;
    var [modelopen,setmodelopen]=useState(false);
    const [cookies, setCookie] = useCookies(['admin']);
    const [modalShow, setModalShow] = React.useState(false);
    var AddToDraft=async()=>{
      item.admin=cookies.admin;
      console.log(item);
          try{
            var res=await fetch(`/user/draft/${cookies.user}/${cookies.admin}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                  },
                  body:JSON.stringify(item)
              });
              console.log(1);
              const d=await res.json();
              console.log(2);
        if(d.status===422 ||  !d){
              window.alert("invalid data");
        }else{
          // window.alert(`item ${name} is added `);
          swal(`item is added `);
          // window.location.reload();
        }
      }catch(e){
          window.alert("error invalid admin user"+e);
          {console.log(e)}
      }
    }

    
    // var history=useHistory();
    return (

           <>
{/* <Modal isOpen={modelopen} center animationDuration={1000} className="model container mt-5 " >
               <div className="container-fluid" data-aos="fade-up"
    data-aos-offset="10"
     
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                     <div className="row justify-content-between  mx-2 mt-2 p-0">
                                  <h5 className="col-md-4 card-title">{cookies.adminname}</h5>
                                  <h5 onClick={()=>setmodelopen(false)} className="cursor"><i class="fa-sharp fa-solid fa-xmark fa-2x"></i></h5>
                     </div>
                     <hr className="h-25"/>
                     <div className="row   mx-2 my-1 p-0">
                                 <div className="col-md-5 mb-3">
                                     <img class="card-img-top  rounded" data-aos="zoom-in" data-aos-delay="1000" src={`https://source.unsplash.com/1600x900/?${item.ProductName}`} alt="Card image cap" />
                                 </div>
                                 <div className="col-md-6 mb-3 mx-2">
                                       <h5 class="card-title">{item.ProductName}</h5>
                                       <h3>₹{item.Price}</h3>
                                <div className="form-group">
                                    <label htmlFor="" className="text-dark">QUANTITY :</label>
                                    <input type="number" className="form-control" name="qun"  onChange={()=>{}}/>
                                 </div>
                                 <div className="row justify-content-end mt-3 mr-2">
                                        <button className="btn btn-success mr-2"> + Add More</button> */}
                                        {/* <button type="button" class="btn btn-danger"><i class="fa-solid fa-cart-shopping fa-1x"></i> Add To Cart</button>
                                        <button className="btn btn-secondary" onClick={()=>setmodelopen(false)} >close</button> */}
                                        {/* <button className="btn btn-danger">Buy Now</button>
                                 </div>
                            </div>
                     </div>
                     
               </div>
</Modal > */}
             
              <div className="col-md-4 my-4  rounded">
                

                <div class="card">
                {/* <img class="card-img-top" src={`/imgs/${item.img}`} alt="Card image cap" />//shadow-lg shadow-sm */}
                <img class="card-img-top  rounded" src={`https://source.unsplash.com/1600x900/?${item.ProductName}`} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.ProductName}</h5>
                    <h3>₹{item.Price}</h3>
                    {/* <p className="lead">{item.ProductName} Lorem, ipsum dolor sit amet consectetur adipisicing.</p> */}
                    <h2 class="avali">Avaliable : {item.QautityAvailable}</h2>
                    <div className="row justify-content-end mt-2 p-0">
                    {/* <button disabled={(item.QautityAvailable<=0)?true:false} class="btn btn-outline-warning bg-dark purchesbtn" id={`${item._id}`}
                     onClick={()=>{
                       setmodelopen(true);
                        setModalShow(true);
                      }} > Purchase Now </button> */}
                          <BootstrapTooltip title="Add to cart" onClick={AddToDraft}> 
                       <h3 className="ml-1 btn btn-dark ">
                               <i class="fa-solid fa-cart-shopping fa-1x"></i>
                       </h3>
                          </BootstrapTooltip>
                          <MyVerticallyCenteredModal
                              show={modalShow}
                              onHide={() => setModalShow(false)
                              }
                              item={item}
      />
                    </div>
                </div>
                </div>
                </div>
     
           </>
    );
};



var SlideBars=()=> 
{

     var Items=["biscuit","Dal","fruits","IceCream","vegetables","soft drinks","snacks","Books and Pens","Rice","Wheat","chocolate","Others"];
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 2,
      };

      return (
        <>
        <div className="col-md- 8 container-c mx-5 my-2">

        <Slider {...settings}>

      {
        Items.map((i)=>{
             return (
                  <div>
                      <h3 className="w-100 h-100 py-2 header">{i}</h3>
                  </div>
             );
        })
      }
         
        </Slider>
        </div>
        </>
      );
}

export default UserDisplay;


// <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-centered" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLongTitle">{bar}</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary"><i class="fa-solid fa-cart-shopping fa-1x"></i> Add To Cart</button>
//       </div>
//     </div>
//   </div>
// </div>