import React, {useState}from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    TRVL <i className="fab fa-typo3" />
                </Link>
            </div>
        </div>
    </>
  )
}

export default NavBar