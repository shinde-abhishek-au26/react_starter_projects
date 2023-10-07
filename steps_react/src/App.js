import React, { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // when we want to update state based on the current value we can pass the callback function to our setStep()
  // EXAMPLE :-->
  // const handleNext = () => {
  //   if (step < 3) {
  // setStep((s)=> s + 2);  // so here the value of step will be +2. we jumping with 2 steps now.
  //   }
  // };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      {/* In the following onClick we are toggling the isOpen state according our need. */}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          {/* PASSING CHILDREN PROP TO "STEPMESSAGE" COMPONENT */}
          <StepMessage step={step}>
            {messages[step - 1]}

            {/* EXAMPLE FOR USING A COMPONENT INSIDE A COMPONENT WITH CHILDREN PROP */}
            <div className="buttons">
              <Button
                bgColor="e3e3d3"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn How
              </Button>
            </div>
          </StepMessage>

          {/* PASSING CHILDREN PROP TO "BUTTON" COMPONENT */}
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              {/* THIS "SPAN" IS A CHILDREN PROP */}
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              {/* THIS "SPAN" IS A CHILDREN PROP */}
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
      {!isOpen && (
        <div className="steps">
          <h2>!! Click On The Close Button !!</h2>
        </div>
      )}
    </>
  );
}

// creating reusable buttons component

// Children prop is the prop that each reacts components automatically recieves.

// Following is the example of children prop to react component.

function Button({ onClick, textColor, bgColor, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step: {step}</h3>
      {children}
    </div>
  );
}

export default App;
