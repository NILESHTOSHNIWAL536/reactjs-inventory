import React from 'react';
import Carousel from 'react-material-ui-carousel';

var  img1 ="/imgs/inv1.jpg";
var  img2 ="/imgs/inv2.jpg";
var  img3 ="/imgs/inv3.jpg";
var  img4 ="/imgs/inv4.jpg";
var  img5 ="/imgs/inv5.jpg";


var person=[
     {
         name:"Nilesh Toshniwal",
         img:"/imgs/krishna.jfif",
         company:"Brane EnterPrices"
     },
     {
        name:"Gilla Arun Kumar",
        img:"/imgs/arun.jfif",
        company:"DBS"
    },
     {
         name:"Bhanu Prasad Reddy",
         img:"/imgs/krishna.jfif",
         company:"Ivanti"
     },
     {
        name:"LAKKARAJU NAGA SAI PRANEETH",
        img:"/imgs/praneeth.jpg",
        company:"Experine"
    },
]


var Home=()=>{
    var arr=[img1,img2,img3,img4,img5];
    return (
        <>
                <div className="container mt-5 bg-light border border-dark p-3">
                        <div  className="row justify-content-center">
                             <div className="col-md-6 col-12">
                            <Carousel>
                                   {
                                       arr.map((i)=>{
                                            return <img className="img-fluid" src={i} alt="" />
                                       })
                                   }
                            </Carousel>
                            </div>
                             <div className="col-md-6 col-12 dd">
                                      <h1 id="myhead">INVENTORY MANAGEMENT</h1>
                                      <p className="lead">The Platform to Publish, Manage & Communicate on Trade Exceptions. Learn More! Unbeatable Value। Scalable Solutions। Simple Implementation। Web-Based। Easy-to-Use। Benefits: Controlled Chat Functionality Linked To Exceptions, Audit Trails And Reports।</p>
                                    {/* <h3 className="text-danger">TEAM MEMBERS</h3>
                                    <ul className="pl-5">
                                        <li><a className='text-decoration-none' href='https://www.linkedin.com/in/nilesh-toshniwal-15a9ba1a9/' target={"_blank"}>NILESH</a></li>
                                        <li><a className='text-decoration-none' href='https://www.instagram.com/praneeth_4.lns/' target={"_blank"}>PRANEETH</a></li>
                                        <li><a className='text-decoration-none' href='https://www.linkedin.com/in/gilla-arun-kumar-987a95179/' target={"_blank"}>Arun</a></li>
                                        <li><a className='text-decoration-none' href='https://www.instagram.com/bhanu_prasad_reddie_1729/' target={"_blank"}>Bhanu</a></li>
                            
                                    </ul> */}
                                    <button className="btn btn-outline-warning bg-dark ml-55">Read More</button>
                            </div>
                        </div>
               </div>
               {/* <div className='container my-5 bg-light border border-dark p-2'>
                   <div className='row justify-content-around p-1'>
                        <div className='col-12'>
                              <h2 className='text-danger text-center'> TECHNICAL TEAM  </h2> 
                        </div>
                         {
                             person.map((per)=>{
                                  return  <Person data={per}/>
                             })
                         }
                   </div> */}
               {/* </div> */}
        </>
    );

};


var Person =(props)=>{

    return (
               <> 
                 <div className=' card col-md-2  bg-light mx-1 my-2 w-100 h-100 p-0 m-0'>
                     <img  src={props.data.img} className="img-fluid rounded"/>
                     <hr className='text-bold h-25 mx-2'></hr>
                     <h1 className='person ml-2'>{props.data.name}</h1>
                      <p className='ml-2 text-primary role-person'>Software Developer @ {props.data.company}</p>
                     <div className='row justify-content-end mr-3 text-bold cursor text-success' >
                          Read More
                     </div>
                 </div>
               </>
        );

}


export default Home;