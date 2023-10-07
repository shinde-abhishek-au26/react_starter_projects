import React, { useState } from 'react';
import BillInupt from './BillInput';
import SelectPercentage from './SelectPercentage';
import Output from './Output';
import Reset from './Reset';

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handelReset() {
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInupt bill={bill} handleChange={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        {' '}
        How do you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handelReset} />
        </>
      )}
    </div>
  );
}

export default TipCalculator;
