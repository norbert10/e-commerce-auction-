import React, { Component } from 'react'
import '../styles/Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className="myfoot">
                <div class="footer">
                    <div class="footer-content">
                        <div class="footer-section about">
                            <h3>Lucky-Bids Auction</h3>
                            <p><em>Lucky-Bids Auction is an e-commerce which deals with auctioning. One can bid or auction any item anytime
                                anywhere.</em>
                            </p>
                            <p><em>Please you are free to reach us any time. We operate 24 hours</em></p>
                            <p><em>+254713 627939</em></p>
                            <p><em>info@jbauctions.co.ke</em></p>
                        </div>
                        <div class="footer-section links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="">Galleries</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                        <div class="footer-section contact-forms">
                            <h3>Leave a Message/Report</h3>
                            <textarea type="text" name="message" id="message" cols="30" rows="4" />
                            <br />
                            <button class="send" onClick={this.userMessage}>SEND</button>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        &copy; 2021 Lucky-Bids Auction platform | Designed and Developed by Norbert Guda & Co. - 0713627939 - Email:norbertguda@gmail.com
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
