import "./topbar.scss";
import {Phone, Mail} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"><img src="assets/chlogo-black.png" alt=""/></a>
                    <div className="itemContainer">
                        <Phone className="icon" />
                        <span>770 595 6304</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>chawkins21@student.gsu.edu</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}