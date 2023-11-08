import React from 'react'
import "./Nav.css" ;
import {Link} from 'react-router-dom' ;
import Button from '../Button/Button'


function Nav() {
  return (
    <div className='nav'>
          <div className='nav-container'>
              <Link to="/" className='navbar-logo'>
                Shop
                <i class='fab fa-typo3'/>
              </Link>

              <div className='menu-item'>
                 <ul className='menu-list'>
                    <li className='nav-item'>
                       <Link to="/" className='nav-links' >
                        Home
                       </Link>
                    </li>
                    <li className='nav-item'>
                       <Link to="/service" className='nav-links' >
                        Service
                       </Link>
                    </li>
                    <li className='nav-item'>
                       <Link to="/products" className='nav-links' >
                        Products
                       </Link>
                    </li>
                 </ul>
              </div>
              <Button buttonStyle='btn--outline'>SIGN UP</Button>
          </div>
    </div>
    
  )
}

export default Nav