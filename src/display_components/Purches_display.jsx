import React from 'react';
// import { useHistory } from 'react-router';


var urlPath="https://api.unsplash.com/search/photos?page=1&query=";
var clientId="&client_id=3GTyNrC3tK1GSx7Wk34A5zW1yghfdc-IxMgPK74B5pM&orientation=landscape&fit=crop&w=900&h=600";



var getImgUrl= async (item) =>{

    
    var p=`${urlPath}${item}${clientId}`;  
    var res=await fetch(`${p}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
           "Access-Control-Allow-Credentials":true,
            "Content-Type":"application/json"
        },
    });
    var d= await res.json();

   var url=d['results'][0]['urls']['small'];
   return url;
}


var Mypurdata=(e)=>{
       var e=e.taget;
 }


const Purches_display = (props) => {
    var item=props.myitem;
    // var history=useHistory();
    return (
              <div className="col-md-4 my-2  rounded">
                <div class="card">
                {/* <img class="card-img-top" src={`/imgs/${item.img}`} alt="Card image cap" />//shadow-lg shadow-sm */}
                {/* <img class="card-img-top  rounded" src={`https://source.unsplash.com/1600x900/?${item.name}`} alt="Card image cap" /> */}
                <img class="card-img-top  rounded" src={getImgUrl(item.name)} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <h3>₹{item.price}</h3>
                    <p className="lead">{item.name} Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <h2 class="avali">Avaliable : {item.qun}</h2>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <button disabled={(item.qun<=0)?true:false} class="btn btn-outline-warning bg-dark purchesbtn float-right" id={`${item._id}`} onClick={()=>{
                        //  history.push(`/purchaseitem/${item._id}`);
                    }}> Purchase Now </button>
                </div>
                </div>
                </div>
     
    );
};

export default Purches_display;
export  {getImgUrl};