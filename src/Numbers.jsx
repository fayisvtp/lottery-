import React, { useState } from "react";
import image from './assets/ticket.png'
export default function Numbers() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [color,setColor] = useState('red')
  function numberView(number) {
    // Check if the number is already selected
    const isSelected = selectedNumbers.includes(number);

    // Check if the selected numbers array length is less than 6 or the number is already selected
    if (selectedNumbers.length < 6 || isSelected) {
      if (isSelected) {
        // If selected, remove it from the array
        setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
      } else {
        // If not selected, add it to the array
        setSelectedNumbers([...selectedNumbers, number]);
      }
      
    } else {
      // Alert the user if they try to select more than 6 numbers
      alert("You can only select up to 6 numbers.");
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
const resetNumbers =()=>{  
  setSelectedNumbers([]);
}
  
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
    <div className="container">
      <div className="d-flex align-items-center justify-content-center">
        {selectedNumbers.map((item, index) => (
          <div className="d-flex" key={index}>
            <div style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}} className={`   text-white d-flex align-items-center  justify-content-start  position-relative     display m-2 `}>
             <p className="text-dark mx-3  position-absolute " style={{fontSize:'35px' ,fontWeight:'bold'}}>
              {item}CKYIO</p></div>
          </div>
        ))}
      </div>
      <div>
  {rows.map((row, index) => (
    <div className="row" key={index}>
      {row.map((number, i) => (
        <button
          onClick={() => numberView(number)}
          className={`col-1 number-btn m-2 ${selectedNumbers.includes(number) ? 'bg-primary  text-light' : 'bg-light '}`}
          key={i}
        >
          {number}
        </button>
      ))}
    </div>
  ))}
</div>

      <div className="d-flex ">
    <button onClick={resetNumbers}>Reset</button>
    <button onClick={pickRandomNumbers}>pick Random</button>
      </div>
    </div>
  );
}
