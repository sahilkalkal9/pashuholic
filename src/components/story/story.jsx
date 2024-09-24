import { Link } from "react-router-dom"
import "../../App.scss"
import Nav from "../nav/nav"
import { Helmet } from "react-helmet"

function Story() {
    return (
        <>
            <Helmet>
                <title>Our Story | Pashuholic Foundation</title>
                <meta name="description" content="Welcome to Pashuholic Foundation. Our initiative is to save each and every stray animal. Visit our story page for more info." />
                <link rel="canonical" href="https://pashuholic.vercel.app/our-story" />

            </Helmet>
            <div className="Home">
                <div className="home-box">
                    <Nav />
                    <div className="intro-box-page">
                        <div className="intro-box-sub">
                            <p className="page-head">
                                OUR STORY
                            </p>

                            <p className="page-dets">
                                Empowering lives, one rescue at a time, as we recover hope and release potential, endlessly repeating our commitment to compassion.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="home-lower">
                    <div className="abox">
                        <div className="f-box">

                            <p className="story-text" >
                                One day while we were going home we saw one dehydrated bull sitting beside the road.

                                We asked few People who lived nearby, they said that this bull was being beaten with a pipe and from that day he was not able to stand because he had multiple injuries on his spine.
                                <br /><br />
                                It was very shocking because noone took initiative to treat and save him,
                                We tried to take help from everyone and contact veterinary doctors but are request got unheard.
                                <br /><br />
                                So we thought to rescue him ourself,
                                We gave him treatment and after we saw his improvement we sent him to gowshala.
                                Slowly and gradually,
                                We started to rescue many animals including dogs, cats, horses, cows, bulls , goats and etc.
                                <br /><br />
                                It takes a big heart to take that one step but blessings count.
                                We are still in the process of rescuing and saving lives and looking forward for more volunteers.
                            </p>
                        </div>
                        <div className="main-box">
                            <p className="head">Our Mission</p>
                            <p className="story-text" >
                                Our mission is to save lives of the innocent and voiceless creatures.
                                It's hard to see animals getting injured by accidents or by being beaten by few heartless humans,
                                Our goal is to rescue, treat and save life of these voiceless animals.
                                <br /><br />
                                Also,  with rescue we are working towards Birth control where we sterilize all the dogs because of the increasing population
                            </p>
                        </div>
                        <div className="main-box">
                            <p className="head">Wanna Support Us ?</p>
                            <p className="story-text" >
                                Your support has the power to transform lives. With just a click, you can become a lifeline for the voiceless creatures in our care. Every donation, no matter how big or small, fuels our mission to rescue, heal, and protect animals in need. Together, we can make a difference. Join us in our journey to create a world where every animal is cherished and valued. Donate now and be a hero to those who need it most. Your generosity matters.
                            </p>

                            <Link to='/donate'>
                                <button className="dnb">Donate</button>
                            </Link>
                        </div>

                    </div>
                </div>





            </div>
        </>

    )
}

export default Story