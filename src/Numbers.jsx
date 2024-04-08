import React, { useState } from "react";
import image from "./assets/ticket.png";
import { toast } from "react-hot-toast";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import Payment from "./Payment";

export default function Numbers() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  function numberView(number) {
    const isSelected = selectedNumbers.includes(number);

    if (selectedNumbers.length < 6 || isSelected) {
      if (isSelected) {
        setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
      } else {
        setSelectedNumbers([...selectedNumbers, number]);
      }
    } else {
      toast.error("Sorry! You can only select up to 6 numbers.");
    }
  }

  const numbers = [];

  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  const rows = [];
  for (let i = 0; i < numbers.length; i += 10) {
    rows.push(numbers.slice(i, i + 10));
  }

  // reset numbers ************
  const resetNumbers = () => {
    setSelectedNumbers([]);
  };

  // random numbers ************
  const pickRandomNumbers = () => {
    const randomNumbers = [];
    for (let i = 0; i < 6; i++) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
      } while (randomNumbers.includes(randomNumber));
      randomNumbers.push(randomNumber);
    }
    setSelectedNumbers(randomNumbers);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1
        className="d-flex justify-content-center text-white "
        style={{ backgroundColor: "#323FC1" }}
      >
        Collect Your Tickets
      </h1>
      <div
        className="container d-flex flex-row m-5 col-11 pb-5 trans"
        style={{ backgroundColor: "#ECEFFF", borderRadius: "30px" }}
      >
        <div className="col-12 ">
               
               {/* Tickets images session************************ */}

          <div className="d-flex div-1 align-items-center justify-content-center  ">
            {selectedNumbers.map((item, index) => (
              <div className=" d-flex  justify-content-center" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className={`   text-white d-flex align-items-center  justify-content-start  position-relative     display m-2 `}
                >
                  <p
                    className="text-dark mx-3  position-absolute "
                    style={{ fontSize: "35px", fontWeight: "bold" }}
                  >
                    <span className="text-danger"> {item}</span>
                    <span>CKYIO</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div>
            <div className="d-flex mx-5  p-3 justify-content-end ">
              <button className="clean_btn text-danger" onClick={resetNumbers}>
                <CleaningServicesIcon /> Clean
              </button>
              <button
                className="random_btn text-success  "
                onClick={pickRandomNumbers}
              >
                <SwipeLeftIcon />
                Pick Quick
              </button>
            </div>
            
              <div className="flex col-12">

                {numbers.map((number, i) => (
                  <button
                    onClick={() => numberView(number)}
                    className={`col-1  justify-content-center align-items-center number-btn m-2 ${
                      selectedNumbers.includes(number)
                        ? "bg-primary  text-light"
                        : "bg-light "
                    }`}
                    key={i}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <div className="bg-warning d-flex align-items-center   justify-content-center  " style={{borderRadius:'10px'}}>
        <button className="buy_btn">Buy Now</button>
              </div>

             
          </div>
        </div>
      </div>
    </div>
  );
}
