import "./topbar.scss";
import {EmojiEmotions} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"><img src="assets/chlogo-black.png" alt=""/></a>
                    <div className="itemContainer">
                        <EmojiEmotions className="icon" style={{fontSize: 25}}/>
                        <span>Collier Hawkins</span>
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