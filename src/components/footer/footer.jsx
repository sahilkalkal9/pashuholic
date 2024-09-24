import em from "./em.png"
import pc from "./pccccp.png"
import dis from "./whatsapp.png"
import ig from "./igg.png"
import email from "./em.png"
import tw from "./twitter.png"
import { Link } from "react-router-dom"

function Footer() {
        return (
                <div className="Footer">
                        <div className="main-footer-box">
                                <div className="footer-box">
                                        <div className="company-footer">
                                                <p className="logoText" >PASHUHOLIC FOUNDATION</p>
                                                <p className="footer-about" >An initiative to save stray animals</p>
                                                {/* <p className="footer-reach">Reach out to us</p>
                                                <p className="footer-about" >Get your questions answered about Pashuholic</p>
                                                <div className="footer-icons">

                                                        <p className="footer-email" ><a href="mailto:pashuholic@gmail.com" >pashuholic@gmail.com</a></p>
                                                </div> */}

                                                <div className="con-opts">
                                                        <div className="con-opt">
                                                                <img className="con-img" src={pc} />
                                                                <p className="con-text fp">7018614124</p>
                                                        </div>
                                                        <div className="con-opt">
                                                                <img className="con-img" src={pc} />
                                                                <p className="con-text fp">8219422639</p>
                                                        </div>
                                                        {/* <div className="con-opt">
                                                                <img className="con-img" src={mail} />
                                                                <p className="con-text">pashuholic@gmail.com</p>
                                                        </div> */}
                                                </div>
                                                <div className="lower-footer-icons">

                                                        <a href="mailto:pashuholic@gmail.com" target="blank">
                                                                <img className="lower-footer-icon" src={email} />
                                                        </a>
                                                        <a href="https://instagram.com/pashuholic" target="blank">
                                                                <img className="lower-footer-icon" src={ig} />
                                                        </a>



                                                </div>

                                        </div>

                                        {/* <div className="second-footer">
                                                <div className="">
                                                        <p className="footer-head-sub">Comapany</p>
                                                        <div className="footer-menu">

                                                                <p className="footer-menuItem">Home</p>

                                                                <p className="footer-menuItem">Our Story</p>

                                                                <p className="footer-menuItem">Donate Us</p>

                                                                <p className="footer-menuItem">Our Rescues</p>

                                                                <p className="footer-menuItem">Join Us</p>





                                                        </div>
                                                </div>

                                                <div className="">
                                                        <p className="footer-head-sub">Support</p>
                                                        <div className="footer-menu">

                                                                <p className="footer-menuItem">Privacy Policy</p>

                                                                <p className="footer-menuItem">Terms & Conditions</p>

                                                                <p className="footer-menuItem">Refund Policy</p>







                                                        </div>
                                                </div>

                                        </div> */}
                                </div>
                                <div className="lower-footer">
                                        <p className="footer-lower-txt" >&copy;2021 Pashuholic Foundation  </p>

                                </div>
                        </div>
                </div>
        )
}

export default Footer;