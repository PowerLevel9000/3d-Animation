import React from 'react'
import iphone from '../assets/images/iphone-14.jpg'
import iphoneHand from '../assets/images/iphone-hand.png'


const Jumbotron = () => {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img src={iphone} className="logo" alt="iphone 12 pro" />
      <p className="text">Big and Bigger</p>
      <span className="Description">
        From $41.62/mo. for 24 mo. or $999 before trade in
      </span>
      <ul className="links">
        <li>
          <button className="button"> Buy</button>
        </li>
        <li>
          <a href="#soundSection" className="link">Learn more</a>
        </li>
        <li>
          <img src={iphoneHand} alt="iphone" className="iphone-img" />
        </li>
      </ul>
    </div>
  );
}

export default Jumbotron
