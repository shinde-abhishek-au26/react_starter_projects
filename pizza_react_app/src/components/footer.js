import React from 'react';

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) {
  //   alert('we are currently open !');
  // } else {
  //   alert('sorry ! we are closed!');
  // }
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open until {closeHour}:00. Come visit us or order online !!
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

export default Footer;
