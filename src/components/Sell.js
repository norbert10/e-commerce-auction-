import React, { Component } from 'react'
import '../styles/Sell.css'
import AuctionImg from '../Images/auctionpageimage.jpg'

export class Sell extends Component {
    render() {
        return (
            <div class="parent" style={{backgroundImage: `url(${AuctionImg})`}}>
                <div>
                    <div class="auction-header">
                        <h1>JB AUCTION</h1>
                        <p><em>Auction your item from anywhere, anytime</em></p>
                    </div>
                    <div className="form" >
                        <form action="/products" method="POST" >
                            <div className="item-details">
                                <div className="item-description">
                                    <select id="category-select" name="category">
                                        <option value="electronics">Electronics</option>
                                        <option value="motors">Motors</option>
                                        <option value="furniture">Furniture</option>
                                        <option value="household">House Hold Items</option>
                                        <option value="animals">Animals</option>
                                    </select>
                                    <br></br>
                                    <input type="text" name="item_name" className="item-input" placeholder="Item Name"></input><br />
                                    <input type="number" name="item_price" className="item-input" placeholder="Min Price" ></input><br />
                                    <select id="category-select" name="location">
                                        <option value="nairobi">Nairobi</option>
                                        <option value="nairobi">Kisumu</option>
                                        <option value="nairobi">Eldoret</option>
                                        <option value="nairobi">Mombasa</option>
                                        <option value="nairobi">Kisii</option>
                                        <option value="nairobi">Kajiado</option>
                                    </select><br />
                                    <input type="phone" name="phone_number" className="item-input" placeholder="Phone Number"></input><br />
                                    <br />
                                    <input type="file" name="file" id="img" accept="image/*" className="item-input" /><br />
                                </div>
                                <div class="submission-btns">
                                    <input type="button" value="submit" class="send-btn" ></input>
                                    <input type="reset" value="cancel" class="cancel-btn" ></input>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        )
    }
}

export default Sell
