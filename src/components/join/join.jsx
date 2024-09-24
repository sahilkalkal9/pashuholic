import "../../App.scss"
import Nav from "../nav/nav"
import loc from "./loc.png"
import wap from "./whatsapp.png"
import red from "./export.png"
import ig from "./instagram.png"
import yt from "./youtube.png"

function Join() {
    return (
        <div className="Home">
            <div className="home-box">
                <Nav />
                <div className="intro-box-page">
                    <div className="intro-box-sub">
                        <p className="page-head">
                            JOIN US
                        </p>

                        <p className="page-dets">
                            Join us in rescuing and saving stray animals – your support can transform despair into hope, one paw at a time.
                        </p>

                    </div>
                </div>
            </div>

            <div className="home-lower">
                <div className="jbox">
                    <div className="offline">
                        <p className="off-head">
                            Join Us Offline
                        </p>

                        <div className="off-methods">
                            <div className="off-method">
                                <p className="donation-method-head">
                                    1. Visit
                                </p>
                                <div className="off-methods-sub">
                                    <p className="donation-method-text">
                                        You can visit at our shelter, open for visitors from Mon to Sun between 9am and 6pm<br /> Click below to get directions
                                    </p>
                                    <div className="off-method-det">
                                        <img className="loc" src={loc} />
                                        <a href="https://www.google.com/maps/dir//Pashuholic+Foundation,+Bagiarra,+Himachal+Pradesh+176052/@32.1823893,76.3288793,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391b5340ac47fe61:0x2399a5bc34ba69d8!2m2!1d76.4112806!2d32.182416?entry=ttu" target="blank" className="loc-text">Pashuholic Foundation, Bagiarra, Himachal Pradesh - 176052</a>

                                    </div>
                                </div>
                            </div>
                            <div className="off-method">
                                <p className="donation-method-head">
                                    2. Volunteer
                                </p>
                                <div className="off-methods-sub">
                                    <p className="donation-method-text">
                                        You can volunteer with us in this noble work, minimum time is 4 hours per day and maximum time depends on you. You will have to arrange your own accomodation and meals.<br />Visit our shelter and join us.. <br /> Click below to get directions
                                    </p>
                                    <div className="off-method-det">
                                        <img className="loc" src={loc} />
                                        <a href="https://www.google.com/maps/dir//Pashuholic+Foundation,+Bagiarra,+Himachal+Pradesh+176052/@32.1823893,76.3288793,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391b5340ac47fe61:0x2399a5bc34ba69d8!2m2!1d76.4112806!2d32.182416?entry=ttu" target="blank" className="loc-text">Pashuholic Foundation, Bagiarra, Himachal Pradesh - 176052</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offline">
                        <p className="off-head">
                            Join Us Online
                        </p>

                        <div className="off-methods">
                            <div className="off-method">
                                <p className="donation-method-head">
                                    1. Subscribe our YouTube channel
                                </p>
                                <div className="off-methods-sub">
                                    <p className="donation-method-text">
                                        🎥 Calling all Content Creators and Enthusiasts! 🎥
                                        <br />
                                        Exciting news! Our vibrant WhatsApp community is now expanding onto YouTube! 🌟
                                        <br />
                                        Are you passionate about saving animals? Ready to connect with like-minded individuals, share your experiences, and learn from others? Look no further! Our YouTube channel is your gateway to a world of inspiration, knowledge, and community. 🌍💡
                                        <br />
                                        Subscribe now and join our growing family of creators and enthusiasts! From tutorials to discussions and beyond, there's something for everyone! Let's embark on this journey together and make magic happen! 🔥✨
                                        <br />
                                        Click on the link below to subscribe our youtube channel:
                                    </p>
                                    <div className="off-method-det">
                                        <img className="loc" src={yt} />
                                        <a href="https://www.youtube.com/@pashuholic" target="blank" className="loc-text">https://www.youtube.com/@pashuholic</a>

                                    </div>
                                </div>
                            </div>
                            <div className="off-method">
                                <p className="donation-method-head">
                                    2. Join our WhatsApp group
                                </p>
                                <div className="off-methods-sub">
                                    <p className="donation-method-text">
                                        Join our WhatsApp group and become a part of our vibrant community! 🎉
                                        <br />

                                        Whether you're a seasoned pro or just starting out, our group is the perfect place to connect, share ideas, and learn together. From discussions to updates and exclusive content, there's something for everyone!
                                        <br />
                                        Don't miss out on the fun! Click the link below to join us now:
                                    </p>
                                    <div className="off-method-det">
                                        <img className="loc" src={wap} />
                                        <a href="https://chat.whatsapp.com/BvZJk4O96sZDs72r62rH6y" target="blank" className="loc-text">https://chat.whatsapp.com/BvZJk4O96sZDs72r62rH6y</a>

                                    </div>
                                </div>
                            </div>

                            <div className="off-method">
                                <p className="donation-method-head">
                                    3. Follow us on Instagram
                                </p>
                                <div className="off-methods-sub">
                                    <p className="donation-method-text">
                                        🌟 Elevate Your Experience! 🌟
                                        <br />
                                        Looking for a space where your passion meets purpose? Look no further! Join our exclusive WhatsApp group and immerse yourself in a world of endless inspiration, connections, and growth! 🚀💬
                                        <br />
                                        Whether you're a creator, innovator, or dreamer, our community is tailor-made for YOU! Dive into engaging discussions, share your journey, and discover new perspectives from fellow enthusiasts. 🌈✨
                                        <br />
                                        Ready to unlock your full potential? Tap the link below to follow us now! Let's embark on this exciting adventure together! 🌟
                                        <br />
                                    </p>
                                    <div className="off-method-det">
                                        <img className="loc" src={ig} />
                                        <a href="https://www.instagram.com/pashuholic/" target="blank" className="loc-text">https://www.instagram.com/pashuholic/</a>

                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Join