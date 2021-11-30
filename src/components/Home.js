import React, { Component } from 'react'
import Image from '../Images/car.jpg'
import '../styles/Home.css'
import Logo from '../Images/tv1.webp'
import Electronics from '../Images/tv.jpg'
import Car from '../Images/car.jpg'
import Twositter from '../Images/two-seater.webp'
import Cooker from '../Images/cooker.jpg'
import Cow from '../Images/cow.jpg'

export class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="home-image">
                    <img src={Image} className="carImage" />
                    <div className="arrows">
                        <span className="left">&#8592;</span>
                        <span className="right">&#8594;</span>
                    </div>
                </div>
                <div className="mission-vision">
                    {/* <div className="logo-div">
                        <img src={Logo} className="logo-image"/>
                    </div> */}
                    <h2>OUR VISION</h2>
                    <p>Our vission is to validate auction as the preferred assets sales method and to be
                        recognized as the leading auction firm in the county
                    </p>
                    <h2>OUR MISSION</h2>
                    <p>Our mission is to connect buyers and sellers through a competitive bidding
                        method to discover true market value for real estate and other assets <br />
                        We are determined to biuld a trust between the buyers and the sellers
                    </p>

                </div>
                <div className="about-home">
                    <h2>About Us</h2>
                    <p>Founded in 2020, Lucky-Bids Auction is continuously growing into one of the leading auction firms in the country
                        <br />
                        Made up of nearly 30 real estate, marketing, legal and accounting professionals-we offer the experience and the expertise <br />
                        to perform every task necessary for your real estate and property needs. Conducting nearly 700 auctions last year, we have <br />
                        built an efficient, proven system for successfully selling and obtaining optional prices for our clients. No matter how challenging
                    </p>
                </div>

                <div>
                    <div className="mycategories">
                        <h2>See products categories</h2>
                        <div className="categories-flex">
                            <div className="cats">
                                <h4>Motors</h4>
                                <img src={Car} />
                            </div>
                            <div className="cats">
                                <h4>Furniture</h4>
                                <img src={Twositter} />
                            </div>
                            <div className="cats">
                                <h4>House Hold items</h4>
                                <img src={Cooker} />
                            </div>
                            <div className="cats">
                                <h4>Animals</h4>
                                <img src={Cow} />
                            </div>
                            <div className="cats">
                                <h4>Electronics</h4>
                                <img src={Electronics} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Home
