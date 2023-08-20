import '../styles/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className='wave'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 175"><path fill="#495E57" fill-opacity="1" d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,112C840,117,960,107,1080,96C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            <div className="footer-layout">
                <div className="footer-content">
                    <h1>Viridian Vines</h1>
                    <div className='footer-center'>
                        <div className="footer-left">
                            <div className="footer-links">
                                <div className="explore">
                                    <h3>Explore</h3>
                                    <div className="links">
                                        <a>About Us</a>
                                        <a>Locations</a>
                                        <a>Careers</a>
                                    </div>
                                </div>
                                <div className="resources">
                                    <h3>Resources</h3>
                                    <div className="links">
                                        <a>Plant Care</a>
                                        <a>FAQ</a>
                                        <a>Careers</a>
                                    </div>
                                </div>
                            </div>
                            <div className="social-media">
                                <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                                <FontAwesomeIcon icon={faFacebook} className='social-icon' />
                                <FontAwesomeIcon icon={faSquareTwitter} className='social-icon' />
                                <FontAwesomeIcon icon={faLinkedin} className='social-icon' />
                            </div>
                        </div>

                        <div className="footer-right">
                            <h2>Newsletter</h2>
                            <p>Don't find out through the grape vine. Hear it from us:</p>
                            <div className="email-input">
                                <input className='sub-email' type="email" placeholder="Your email here"/>
                                <button className='subscribe-btn'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}