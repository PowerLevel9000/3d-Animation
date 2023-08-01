import React from 'react'
import logo from '../assets/images/logo.svg'
import search from '../assets/images/search.svg'
import store from '../assets/images/store.svg'

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={logo} alt="Apple" />
          </li>
          <li>
            <a className="link-styled">Store</a>
          </li>
          <li>
            <a className="link-styled">Mac</a>
          </li>
          <li>
            <a className="link-styled">iPad</a>
          </li>
          <li>
            <a className="link-styled">oPhone</a>
          </li>
          <li>
            <a className="link-styled">iWatch</a>
          </li>
          <li>
            <a className="link-styled">AirPods</a>
          </li>
          <li>
            <a className="link-styled">Tv & Home</a>
          </li>
          <li>
            <a className="link-styled">Entertainment</a>
          </li>
          <li>
            <a className="link-styled">Accessories</a>
          </li>
          <li>
            <a className="link-styled">support</a>
          </li>
          <li>
            <img src={search} alt="search-icon" />
          </li>
          <li>
            <img src={store} alt="store-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
