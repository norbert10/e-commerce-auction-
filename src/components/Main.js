import React, { Component } from 'react'
import { Router } from '@reach/router'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Sell from '../components/Sell'
import Contacts from '../components/Contacts'
import Bid from '../components/Bid'
import About from '../components/About'
import Footer from './Footer'

export class Main extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Router>
                    <Home path="/" />
                    <Sell path="/sell" />
                    <Bid path="/bid" />
                    <Contacts path="/contacts" />
                    <About path="/about" />
                </Router>
                <Footer />
            </div>
        )
    }
}

export default Main
