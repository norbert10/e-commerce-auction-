import React, { Component } from 'react'
import { FaAngleDoubleRight, FaEnvelope, FaFacebook } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { Fafacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import '../styles/Contacts.css'
import ContactImage from '../Images/contacts.jpg'

export class Contacts extends Component {
    render() {
        return (
            <div className="contact-details">
                <div>
                    <h2 className="heading">___Contact Us___</h2>
                    <p>Whenever you need help, we are here for you Talk to us <FaAngleDoubleRight /></p>
                    <div>
                        <img src={ContactImage} />
                    </div>
                </div>
                <div className="contact-content">
                    <h3><em>Lets have a talk</em></h3>
                    <p>Leave us a message here</p>
                    <textarea type="text" name="message" id="message" cols="30" rows="4" />
                    <br />
                    <button class="send" onClick={this.userMessage}>SEND</button> <br />
                    <div className="contacts-social">
                        <div className="contacts-div">
                            <h2>Call or mail us:</h2>
                            <div className="my-contacts">
                               <p><em><FaEnvelope /></em>email</p> 
                               <p><em> <FaPhone /></em>call</p>
                               <p><em><FaWhatsapp /></em>whatsApp</p>
                            </div>
                        </div>
                        <div className="social-sites">
                            <h2>Social sites. Follow us:</h2>
                            <div className="social_links">
                                <p><em> <FaFacebook /></em>facebook</p>
                                <p><em> <FaTwitter /></em>twitter</p>
                                <p><em> <FaInstagram /></em>instagram</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Contacts
