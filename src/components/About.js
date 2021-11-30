import React, { Component } from 'react'
import '../styles/About.css'
import InteractionImage from '../Images/online-interaction.webp'
import Bidding from '../Images/bidding-image.jpg'
import Security from '../Images/security.webp'
export class About extends Component {
    render() {
        return (
            <div>
                <div className="about-us">
                    <h2>About Us</h2>
                    <p>Founded in 2020, Lucky-Bids Auction is continuously growing into one of the leading auction firms in the country
                        <br />
                        Made up of nearly 30 real estate, marketing, legal and accounting professionals-we offer the experience and the expertise <br />
                        to perform every task necessary for your real estate and property needs. Conducting nearly 700 auctions last year, we have <br />
                        built an efficient, proven system for successfully selling and obtaining optional prices for our clients. No matter how challenging
                    </p>
                    <h2>What We Do</h2>
                    <div className="do">
                        <div>
                            <p>We offer platform for sellers and buyers to effectively interact </p>
                            <img src={InteractionImage} />
                        </div>
                        <div>
                            <p>Users can sell or buy through our platform</p>
                            <img src={Bidding} />

                        </div>
                        <div>

                            <p>User security is always guaranteed to the users </p>
                            <img src={Security} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About
