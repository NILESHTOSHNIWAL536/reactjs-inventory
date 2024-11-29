import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

var SlideBar=()=> 
{
    var Items=["biscuit","Dal","fruits","IceCream","vegetables","soft drinks","snacks","Books and Pens","Rice","Wheat","chocolate","Others"];
 
    const settings = {
        dots: true,
        infinite: true,
        speed:1000,
        slidesToShow: 6,
        slidesToScroll: 3
      };
      return (
        <div className="container my-3  py-2 ">
          <Slider {...settings}>
            {
                Items.map((i)=>{
                 return  ( <div>
                    <h3 className="w-100 h-25 py-2 px-3 header text-center">{i}</h3>
                    </div>)
                })
            }
         
            
          </Slider>
        </div>
      );
}

export default SlideBar;