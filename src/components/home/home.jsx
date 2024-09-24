import "../../App.scss"
import Nav from "../nav/nav";
import rescue from "./rescue.png"
import treatment from "./treatment.png"
import care from "./care.png"
import streilization from "./sterilization.png"
import feeding from "./feeding.png"
import release from "./release.png"
import cat from "./cat.png"
import pc from "./pc.png"
import { useState } from "react";
import mail from "./mail.png"
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {




    const clearform = () => {
        document.querySelectorAll(".contact-inp").value = "";
    }



    return (
        <>
            <Helmet>
                <title>Home | Pashuholic Foundation</title>
                <meta name="description" content="Welcome to Pashuholic Foundation - A non-profit organisation unveiling the voices of lovely annimals. Our initiative is to save each and every stray animal." />
                <link rel="canonical" href="https://pashuholic.vercel.app" />

            </Helmet>

            <div className="Home">


                <div className="home-box">
                    <Nav />
                    <div className="intro-box">
                        <div className="intro-box-sub">
                            <p className="name" >
                                <span className="pashu">पशु</span>HOLIC FOUNDATION
                            </p>
                            <p className="tagline">
                                unveiling the voices of the lovely animals
                                <br />
                                an initiative to save stray animals
                            </p>
                            <div className="intro-buttons">
                                <a href="tel:7018614124" target="blank">
                                    <button className="ib">
                                        Helpline
                                    </button>
                                </a>
                                <Link to='/donate'>
                                    <button className="ib db ">
                                        Donate
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-lower">



                    {/* <div className="sec first">
                    <p className="head">Our channel</p>
                    <div className="youtube-sec">
                        <Iframe
                            url={`https://www.youtube.com/embed/?listType=user_uploads&list=Pashuholic Foundation`}
                            width="600px"
                            height="400px"
                            loading="lazy"
                            allowFullScreen
                            className="ytb"
                        />
                    </div>
                </div> */}


                    <div className="sec first">
                        <p className="head">What We Do ?</p>
                        <div className="home-cards">
                            <div className="home-card">
                                <div className="home-card-upper">
                                    <img className="home-card-img" src={rescue} />
                                </div>
                                <div className="home-card-lower">
                                    <p className="home-card-head">RESCUE</p>
                                    {/* <p className="home-card-dets">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p> */}
                                </div>
                            </div>

                            <div className="home-card">
                                <div className="home-card-upper">
                                    <img className="home-card-img" src={treatment} />
                                </div>
                                <div className="home-card-lower">
                                    <p className="home-card-head">TREATMENT</p>
                                    {/* <p className="home-card-dets">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p> */}
                                </div>
                            </div>

                            <div className="home-card">
                                <div className="home-card-upper">
                                    <img className="home-card-img" src={care} />
                                </div>
                                <div className="home-card-lower">
                                    <p className="home-card-head">CARE</p>
                                    {/* <p className="home-card-dets">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p> */}
                                </div>
                            </div>

                            <div className="home-card">
                                <div className="home-card-upper">
                                    <img className="home-card-img" src={streilization} />
                                </div>
                                <div className="home-card-lower">
                                    <p className="home-card-head">STERILIZATIONS</p>
                                    {/* <p className="home-card-dets">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p> */}
                                </div>
                            </div>

                            <div className="home-card">
                                <div className="home-card-upper">
                                    <img className="home-card-img" src={feeding} />
                                </div>
                                <div className="home-card-lower">
                                    <p className="home-card-head">FEEDING</p>
                                    {/* <p className="home-card-dets">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p> */}
                                </div>
                            </div>

                            <div className="home-card">
                                <div className="home-card-upper">
                                    <img className="home-card-img" src={release} />
                                </div>
                                <div className="home-card-lower">
                                    <p className="home-card-head">RELEASE</p>
                                    {/* <p className="home-card-dets">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p> */}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div className="sec">
                    <p className="head">Our Rescues</p>
                    <div className="home-cards">
                        <div className="home-card">
                            <div className="home-card-upper">
                                <img className="home-card-img" src={cat} />
                            </div>
                            <div className="home-card-lower">
                                <p className="home-card-sub-head">name</p>
                                <p className="home-card-dets">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                        </div>

                        <div className="home-card">
                            <div className="home-card-upper">
                                <img className="home-card-img" src={cat} />
                            </div>
                            <div className="home-card-lower">
                                <p className="home-card-sub-head">name</p>
                                <p className="home-card-dets">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                        </div>

                        <div className="home-card">
                            <div className="home-card-upper">
                                <img className="home-card-img" src={cat} />
                            </div>
                            <div className="home-card-lower">
                                <p className="home-card-sub-head">name</p>
                                <p className="home-card-dets">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                    {/* <div className="sec">
                        <p className="head">How We Save ?</p>
                        <div className="sec-con">
                            <div className="t-box-f">
                                <div className="timeline rt">
                                    <p className="home-card-head th">
                                        RESCUE
                                    </p>
                                    <p className="home-card-dets tdt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                </div>
                            </div>

                            <div className="t-box-s">
                                <div className="timeline st">
                                    <p className="home-card-head">
                                        TREATMENT
                                    </p>
                                    <p className="home-card-dets tdt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                </div>

                            </div>

                            <div className="t-box-t">
                                <div className=" et">
                                    <p className="home-card-head">

                                    </p>
                                    <p className="home-card-dets"></p>
                                </div>

                            </div>

                            <div className="t-box-t">
                                <div className="timeline tt">
                                    <p className="home-card-head">
                                        CARE
                                    </p>
                                    <p className="home-card-dets tdt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                </div>

                            </div>

                            <div className="t-box-s">
                                <div className="timeline ft">
                                    <p className="home-card-head">
                                        RELEASE
                                    </p>
                                    <p className="home-card-dets tdt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                </div>

                            </div>




                        </div>
                    </div> */}

                    <div className="sec">
                        <p className="head">Contact Us</p>
                        <div className="contact-box">
                            <div className="contact-left">
                                <form action="https://api.web3forms.com/submit" method="POST" id="form" className="contact-form">
                                    <input type="hidden" name="access_key" value="2ce64ebd-7097-4f9a-bafb-3d7f49b4b372" />
                                    <input type="hidden" name="subject" value="Message from Website" />



                                    <input type="text" name="name" id="name" placeholder="Full Name" required className="contact-inp" />

                                    <input type="email" name="email" id="email" placeholder="E-mail address" required className="contact-inp" />

                                    <input type="text" name="phone" id="phone" placeholder="Phone number" required className="contact-inp" />

                                    <textarea rows="5" name="message" id="message" placeholder="Your Message" required className="contact-txt"></textarea>
                                    <button type="submit" className="contact-submit" >
                                        Send Message
                                    </button>


                                </form>

                                {/* <p className="or" >OR</p> */}




                            </div>
                            <div className="contact-right">
                                <div className="map-box" >
                                    <Iframe
                                        url={`https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d108057.93022279699!2d76.32887933823098!3d32.18238928942553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x391b5340ac47fe61%3A0x2399a5bc34ba69d8!2sPashuholic%20Foundation%2C%20Bagiarra%2C%20Himachal%20Pradesh%20176052!3m2!1d32.182415999999996!2d76.4112806!5e0!3m2!1sen!2sin!4v1713156377022!5m2!1sen!2sin`}

                                        loading="lazy"
                                        allowFullScreen
                                        className="map"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Home;