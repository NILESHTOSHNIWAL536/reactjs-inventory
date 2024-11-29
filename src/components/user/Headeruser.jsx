import React, { useState } from 'react';
import { useCookies } from 'react-cookie';


const HeaderUser = () => {
  const [cookies, setCookie] = useCookies(['admin']);
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
                    <div className="collapse navbar-collapse ml-5" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link"href="/user/Home">HOME</a>
                          {/* <a className="nav-link" href="/stud">HOME</a> */}
                        </li>

                      
                       {/* { isSeleted ? <li className="nav-item"><a className="nav-link"  href="/shops" onClick={()=>setShop(false)}>DisplayShops</a></li>:<GetLinks isSeleted={isSeleted}/>} */}

                        <li className="nav-item">
                          <a className="nav-link logout"  href="/shops" onClick={()=>{
                              setCookie("admin","");
                          }}>DisplayShops</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link logout"  href="/UserDisplay">PurchaseItems</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link logout"  href="/Draft">Draft</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link logout"  href="/">Log Out</a>
                        </li>
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


var GetLinks=(props)=>{
    console.log(props.isSeleted);
  return (
      <> 
          <li className="nav-item">
                          <a className="nav-link" href="/home">Purchase Item</a>
          </li>
      </>
  );

};

export default HeaderUser;