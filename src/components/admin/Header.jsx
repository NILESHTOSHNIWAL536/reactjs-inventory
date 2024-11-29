import React, { useEffect, useState } from 'react';
// import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
// import { NavLink } from 'react-router-dom'NavLink
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

const Header = () => {
  // var history=useHistory();
  var [order,setorder]=useState(0);
  var [orderPerson,setorderPerson]=useState([]);
  let navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['admin']);

  var orderfun=async()=>{

     try{
      console.log("admin header order called")
      var res=await fetch(`/admin/orderNo/${cookies.admin}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
    });
     var d= await res.json();
     console.log(d);  
     setorderPerson(d.order)
     console.log(d.order.length);  
     setorder(d.order.length);
     }catch(e){
        console.log('error while fetching order');
     }

  }



  useEffect(()=>{
      orderfun();
  },[])
   
    return (
        <div>
            <>
            <div className="container-fluid mt-3 pl-5" id="nav">
              <div className="row justify-content-center">
                                    <div className="col-12 text-center">
                  <nav className="navbar navbar-expand-lg   py-3">
                    <a className="navbar-brand mr-5" href="/" >
                        <img src="/imgs/invent.jfif" className="img-fluid" alt="" width="130" height="5" />
                        {/* <img src="/imgs/inv3.jpg" className="img-fluid" alt="" width="130" height="5" /> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-2" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link"href="/admin/Home">HOME</a>
                          {/* <a className="nav-link" href="/stud">HOME</a> */}
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/additem">ADD ITEM</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/displayitems" id="PURCHASEITEM">DISPLAY ITEM</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/updateitem">UPDATE ITEM</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/deleteitem">Delete ITEM</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link"  href="/outofstock">Out Of Stock</a>
                        </li>

                       <Dropdown className='ml-5 nav-'>
      <Dropdown.Toggle variant="" id="" className='nav-link'>
      {/* Sign In */}
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
                <Dropdown.Item className="my-1"  href="/additem"><i class="fa-solid fa-user"></i> Profile</Dropdown.Item>
                <Dropdown.Item className="my-1"  href="/OrderDisplay"> <i class="fa-solid fa-arrow-up-wide-short"></i> Order <Badge bg="dark" className='text-light'>{order}</Badge> </Dropdown.Item>
                <Dropdown.Item className="my-1"  href="/"><i class="fa-solid fa-right-from-bracket"></i> Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                        {/* <li className="nav-item">
                          <a className="nav-link logout"  href="/" >Log Out</a>
                        </li> */}
                      </ul>
                    </div>
                  </nav>
                  </div>
                                </div>
                              </div>
                              </>
                  </div>
    );
};

export default Header;