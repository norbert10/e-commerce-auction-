import React, { Component } from 'react'
import { Link } from '@reach/router'
import '../styles/Nav.css'
import { FaBars } from 'react-icons/fa'

export class Nav extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className="bar-icon">
                    <FaBars />
                </div>
                <div className="navs">
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/sell">Sell</Link>
                    <Link className="links" to="/bid">Bid</Link>
                    <Link className="links" to="/contacts">Contact Us</Link>
                    <Link className="links" to="/about">About</Link>
                </div>
            </div>
        )
    }
}

export default Nav
