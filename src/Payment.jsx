import React from "react";
import image1 from "./assets/reciept.png";
import image2 from "./assets/atm.png";
export default function Payment() {
  return (
    <div className="">
      <div style={{ borderRadius: "10px", backgroundColor: "#323FC1" }}>
        <div className="d-flex p-3">
          <p className="text-white">Ticket booking</p>
          <div className="d-flex text-white  align-items-end justify-content-end"></div>
        </div>
        <div className=" d-flex align-items-center justify-content-center">
          <img className="d-flex " src={image1} alt="" />
        </div>
        <div className=" bg-warning text-white d-flex justify-content-center">
            <button className="buy_btn">Buy Now</button >
        </div>
      </div>
      {/* <div className="bg-warning">
        <hr style={{ color: "#fff" }} />
        <p className="text-white">Payment Mode</p>
        <hr />
        <div className="d-flex align-items-center justify-content-center">
        <img  src={image2} alt="" />
        </div>
        <label htmlFor="">Payment with cash</label>
        <input type="radio" />
      </div> */}
    </div>
  );
}
