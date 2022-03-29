import React from 'react'
import './Footer.scss';

export const Footer = (props) => {
    return (
        <footer className="footer">
            <section className="container">
                <div className="footer__content">
                    <div className="footer__inner_text">
                        <h2>ALU Alumni</h2>
                        <li><a href="/">Join Alumni Community</a></li>
                        <li><a href="/">Join Alumni Community</a></li>
                        <li><a href="/">Donate</a></li>

                        <div className="contact__section">
                            <h3>Contact Us</h3>
                            <p>We’d love to have you reach out to us and would value your interactions with our accomplished alumni</p>
                        </div>
                    </div>

                    <div className="footer__input">
                        <input className="input" placeholder="Enter your fullname" type="text"></input>
                        <input placeholder="Enter your email" type="text"></input>
                        <textarea placeholder="Enter your messsage" type="text"></textarea>
                        <button>Subscribe</button>
                    </div>
                </div>

                <p className="trade_mark">® 2022 African Leadership University Alumni. All rights reserved</p>
            </section>
        </footer>
    )
}

export default Footer;