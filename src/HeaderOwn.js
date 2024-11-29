import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const HeaderOwn = () => {
  const [cookies, setCookie] = useCookies(['admin']);
    return (
        
            <>
            <div className="container-fluid mt-0  mb-5 bg-dark" id="nav">
              <div className="row justify-content-center bg-dark">
                                    <div className="col-12 text-center">
                  <nav className="navbar navbar-expand-lg py-0" >
                    <a className="navbar-brand mr-5" href="/" >
                        <img src="/imgs/invent.jfif" className="img-fluid" alt="" width="100" height="15" />
                        {/* <img src="/imgs/inv3.jpg" className="img-fluid" alt="" width="130" height="5" /> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-5" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link"href="/">HOME</a>
                          
                        </li>

                        <li className="nav-item">
                          <a className="nav-link logout"  href="#">User Role</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link logout"  href="#">Admin Role</a>
                        </li>


                        <li className="nav-item bg-dark ml-5">
                              
                            <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" className='nav-link'>
      Sign In
      {/* <i class="fa-solid fa-ellipsis-vertical"></i> */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item  href="/userLogin">User</Dropdown.Item>
                                  <Dropdown.Item  href="/adminLogin">Admin</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                        </li>



                        {/* <div class="dropdown mx-4 ">
                                <button class=" dropdown-toggle nav-link btn btn-dark nav-item" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     Sign In
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/adminLogin">Admin</a>
                                    <a class="dropdown-item" href="/userLogin">User</a>
                                </div>
                        </div> */}

                       
                      </ul>
                    </div>
                  </nav>
                  </div>
                                </div>
                              </div>
                              </>
                 
    );
};

export default HeaderOwn;