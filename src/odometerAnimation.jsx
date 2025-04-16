import { useEffect, useRef } from 'react';
import Odometer from 'odometer';

function OdometerDisplay({ balance }) {
  const ref = useRef(null); //we will aim this ref at the div of our odometer

  useEffect(() => {
    if (ref.current) { //if the div exists in the DOM
      const od = new Odometer({
        el: ref.current, //our target element
        value: 0, // starting value
        theme: 'minimal',
        format: '(,ddd).dd', // 2 decimal places 
        duration: 2000, 
      });
      od.update(balance); //update roll the value from 0 to our current balance (required)
    }
  }, [balance]); //runs everytime balance is changed 

  return (
    <h1 id='balance'>
      $<div ref={ref} className="odometer"/>
    </h1>
)
}

export default OdometerDisplay;