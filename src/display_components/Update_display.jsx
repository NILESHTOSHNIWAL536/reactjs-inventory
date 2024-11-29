import React from 'react';
import { useHistory } from 'react-router';

const Update_display = (props) => {
    var item=props.myitem;
    var history=useHistory();
    return (
        <>
             <div className="col-md-4 my-2">
                <div class="card">
                <img class="card-img-top  rounded" src={`https://source.unsplash.com/1600x900/?${item.name}`} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <h3>₹{item.price}</h3>
                          <button class="btn btn-success float-right ml-auto updateitemb" id={`${item._id}`} name={`${item.name}`} onClick={()=>{
                                 history.push(`updateitem/${item._id}`);  
                              }}>
                              Update
                          </button>
                </div>
                </div>
                </div>
        </>
    );
};

export default Update_display;