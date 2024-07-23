import { Helmet } from "react-helmet"
import "../../App.scss"
import Nav from "../nav/nav"
import qr from "./qr.jpg"

function Donate() {
    return (
        <>
            <Helmet>
                <title>Donate Us | Pashuholic Foundation</title>
                <meta name="description" content="Welcome to Pashuholic Foundation. Donate us to help animals to live their life happily. Even a small donation can save their lives. Visit our donate page for more info." />
                <link rel="canonical" href="https://pashuholic.vercel.app/donate" />

            </Helmet>
            <div className="Home">
                <div className="home-box">
                    <Nav />
                    <div className="intro-box-page">
                        <div className="intro-box-sub">
                            <p className="page-head">
                                DONATE US
                            </p>

                            <p className="page-dets">
                                Welcome to our donation page, where every contribution goes a long way in saving and improving the lives of animals in need. Your generosity helps us provide food, shelter, medical care, and love to animals who have been neglected, abused, or abandoned.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="home-lower">
                    <div className="dbox">
                        <div className="imp-donate">
                            <p className="imp-donate-head">
                                Your money will go towards:
                            </p>
                            <ul className="donate-keys">
                                <li className="donate-key">Medicines and medical supplies for animals</li>
                                <li className="donate-key">Food for animals</li>
                                <li className="donate-key">Transportation expenses for animal rescues</li>
                                <li className="donate-key">Vet and animal welfare staff salaries</li>
                            </ul>
                        </div>


                        <div className="donation-methods">
                            {/* <div className="donation-method">
                                <p className="donation-method-head" >1. Amazon Wishlist</p>
                                <div className="wishlist-box">
                                    <p className="donation-method-text">
                                        We believe in the power of community and generosity, and we're immensely grateful for your willingness to support our mission. By purchasing items from our Amazon Wishlist, you're not only helping us meet practical needs but also contributing to the betterment of our cause. Every item, no matter how big or small, makes a significant difference in the lives we touch.
                                    </p>
                                    <button className="wish-box">Amazon Whishlist</button>
                                </div>
                            </div> */}

                            <div className="donation-method">
                                <p className="donation-method-head" >1. Bank Transfer</p>
                                <div className="bank-box">
                                    <p className="bank-det">Bank Name : <b>ABC Bank</b> </p>
                                    <p className="bank-det">Account Name : <b>Pashuholic Foundation</b> </p>
                                    <p className="bank-det">Account No. : <b>6710000100060915</b> </p>
                                    <p className="bank-det">Account Type : <b>Current</b> </p>
                                    <p className="bank-det">IFSC Code : <b>ABCD00000</b> </p>
                                </div>
                            </div>


                            <div className="donation-method">
                                <p className="donation-method-head" >2. Mobile No. & QR Codes</p>
                                <div className="bank-box">
                                    <p className="bank-det"><b>+91 7018614124</b></p>
                                    <p className="bank-det"><b>+91 8219422639</b></p>

                                    <div className="qrs">
                                        <img className="qr" src={qr} />

                                    </div>
                                </div>
                            </div>

                            {/* <div className="donation-method">
                                <p className="donation-method-head" >4. Milaap Fundraiser</p>
                                <div className="wishlist-box">
                                    <p className="donation-method-text">
                                        We're on a mission to make a difference, and your support means the world to us! Click the link below to join our Milaap fundraiser and become a part of something truly impactful. Together, we can create positive change and spread hope to those in need. Thank you for your generosity and for being a beacon of light in our journey.
                                    </p>
                                    <button className="wish-box">Milaap Fundraiser</button>
                                </div>
                            </div> */}


                        </div>


                        <p className="don-text">
                            Together, we can make a difference and give hope to animals who deserve a second chance at happiness. Thank you for your kindness and compassion.
                        </p>


                    </div>
                </div>





            </div>
        </>

    )
}

export default Donate