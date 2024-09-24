import { Link } from "react-router-dom"
import "../../App.scss"
import logoo from "./pashuholic.jpg"
import menuI from "./menu.png"

function Nav() {


    const openNav = () => {
        document.getElementById("ovNav").style.display = "flex"
    }

    const closeNav = () => {
        document.getElementById("ovNav").style.display = "none"
    }


    return (
        <>
            <div id="ovNav" className="overlayNav">
                <div className="overlayBox">
                    <div className="omenu">
                        <p onClick={closeNav} className="omenu-item com" >Close</p>
                        <Link onClick={closeNav} to='/our-story'>
                            <p onClick={closeNav} className="omenu-item" >Our Story</p>
                        </Link>
                        <Link onClick={closeNav} to='/donate' >
                            <p onClick={closeNav} className="omenu-item" >Donate Us</p>
                        </Link>
                        {/* <Link onClick={closeNav} to='/adopt'>
                            <p onClick={closeNav} className="omenu-item" >Adopt</p>
                        </Link>
                        <Link onClick={closeNav} to='/residents'>
                            <p onClick={closeNav} className="omenu-item" >Resident Animals</p>
                        </Link> */}
                        <Link onClick={closeNav} to='/join'>
                            <p onClick={closeNav} className="omenu-item" >Join Us</p>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="Nav">
                <div className="nav-box">
                    <div className="logo">
                        <Link to='/'>
                            <img className="logoImg" src={logoo} />
                        </Link>
                    </div>
                    <div className="menu">
                        <Link to='/our-story'>
                            <p className="menu-item" >Our Story</p>
                        </Link>
                        <Link to='/donate' >
                            <p className="menu-item" >Donate Us</p>
                        </Link>
                        {/* <Link to='/adopt'>
                            <p className="menu-item" >Adopt</p>
                        </Link>
                        <Link to='/residents'>
                            <p className="menu-item" >Resident Animals</p>
                        </Link> */}
                        <Link to='/join'>
                            <p className="menu-item" >Join Us</p>
                        </Link>

                        <img className="menuImg" onClick={openNav} src={menuI} />

                    </div>
                </div>
            </div></>
    )
}

export default Nav