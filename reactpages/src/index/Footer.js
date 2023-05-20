import React from 'react';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="column-left">
                <h3 className="footer-h3 inside_text">About</h3>
                <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li>
                        <a href="terms_and_conditions.html">Terms and Conditions</a>
                    </li>
                </ul>
            </div>
        );
    }
}

class OpeningHours extends React.Component {
    render() {
        return (
            <div className="column-right">
                <h3 className="footer-h3 inside_text">Opening Hours</h3>
                <ul>
                    <li>Monday - Friday: 9am - 6pm</li>
                    <li>Saturday: 10am - 5pm</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>
        );
    }
}

class SocialMediaIcons extends React.Component {
    render() {
        return (
            <div className="socialmedia">
                <img src={process.env.PUBLIC_URL + "/img/iglogo.png"} alt="Instagram" />
                <img src={process.env.PUBLIC_URL + "/img/fblogo.png"} alt="Facebook" />
                <img src={process.env.PUBLIC_URL + "/img/ttlogo.png"} alt="Twitter" />
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className="foot">
                <div className="footdiv">
                    <div className="footer-container">
                        <AboutUs />
                        <OpeningHours />
                    </div>
                    <div className="footbanner">
                        <h3
                            style={{fontSize: '16px'}}
                            className="minimalistic"
                            id="welcome_name_area"
                        >
                            your minimalistic wine shop
                        </h3>
                    </div>
                    <SocialMediaIcons />
                </div>
            </footer>
        );
    }
}

export default Footer;
