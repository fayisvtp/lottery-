import React, { useState } from 'react';

export default function Numbers() {
    const [selectedNumbers, setSelectedNumbers] = useState([]); 
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
            alert('You can only select up to 6 numbers.');
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
console.log(selectedNumbers)
  return (

    <div className='container'>
      <div>
                {selectedNumbers.map((item, index) => (
                    <ul key={index}>
                        <li>{item}</li>
                    </ul>
                ))}
            </div>
        <div>
 
      {rows.map((row, index) => (
        <div className='row ' key={index}>
          {row.map((number, i) => (
            <button onClick={()=>numberView(number)} className='col-1 number-btn ' key={i}>
              {number}
            </button >
          ))}
        </div>
      ))}
        </div>
    </div>
  );
}
