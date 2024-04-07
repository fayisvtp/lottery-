import React from "react";
import image1 from "../assets/image1.png";
import image2 from '../assets/Hourglass.png'
export default function Banner() {
  return (
    <div className="d-flex align-items-center justify-content-center m-3">
      <div className=" banner  col-12 d-flex ">
        <div className="col-6">
          <img
            className="col-12 m-3"
            src={image1}
            alt="lotery image"
            style={{ width: "22em" }}
          />
         
        </div>
        
        <div className="col-6 d-flex flex-column justify-content-center ">
            <div>

          <h1 className="banner_head1 ">Hurry Up</h1>
          <h2 className="banner_head2">up to 44% of on 12 teckets</h2>
          <p className="banner-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Iure excepturi enim eligendi, eos quaerat delectus eveniet <br />
             ut distinctio  eius ducimus, suscipit dolor a error. <br />
             Voluptatem eius repellendus
            fugiat adipisci quod!
          </p>
          
          <button className="banner_btn d-">learn more</button>
            </div>
        {/* <img src={image2} 
          alt="hourglass" 
          style={{width:'20em'}}/> */}
        </div>
      </div>
    </div>
  );
}
