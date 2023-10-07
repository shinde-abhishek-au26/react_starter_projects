import React from 'react';

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You Pay {bill + tip} (${bill} +${tip} tip)
      </h3>
    </div>
  );
}

export default Output;
