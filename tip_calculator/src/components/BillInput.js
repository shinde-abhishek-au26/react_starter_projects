import React from 'react';

function BillInput({ bill, handleChange }) {
  return (
    <div>
      <div>
        <label>How Much Was the bill ?</label>
        <input
          type="text"
          value={bill}
          placeholder="Bill Value"
          onChange={(e) => handleChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default BillInput;
