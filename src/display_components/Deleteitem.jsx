import React,{useEffect} from 'react';
import swal from 'sweetalert';
const Delete_display = (props) => {
    var item=props.myitem;
//     useEffect(()=>{
//       props.call();
//  },[])
    // var history=useHistory();
    var deleteitem=async (e)=>{
               console.log(e.target.id);
             var  mydata=e.target.name;
             swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this data!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then(async (willDelete) => {
                if (willDelete) {
                  swal(` item -${mydata} has been deleted`, {
                    icon: "success",
                  });
                  try{
                    var res=await fetch(`/student/${e.target.id}`,{
                        method:"DELETE",
                        headers:{
                           Accept:"application/json",
                           "Content-Type":"application/json"
                       },
                       credentials:"include"
                    });
                     var d=await res.json();
                    console.log(d);
                     if(!d.status===200){
                           window.alert("invalid data");
                     }
                  }catch(e){
                      window.alert("error cannot dele data....");
                  }
                  window.location.reload();
                } else {
                  swal("Your data is safe!");
                }
              });
                //    alert(e.target.name+" is deleted")
    }

    return (
              <div className="col-md-4 my-2">
                <div class="card">
                <img class="card-img-top  rounded" src={`https://source.unsplash.com/1600x900/?${item.name}`} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <h3>₹{item.price}</h3>
                          <button class="btn btn-outline-light bg-danger deleteitem float-right" id={`${item._id}`} name={`${item.name}`} onClick={deleteitem}>
                              Delete
                          </button>
                </div>
                </div>
                </div>
     
    );
};

export default Delete_display;