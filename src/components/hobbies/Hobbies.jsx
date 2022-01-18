import "./hobbies.scss"
import {Headset, Straighten, Theaters, Brush} from "@material-ui/icons"


export default function Hobbies() {
    return (
        <div className="hobbies" id="hobbies">
            <div className="left">
                <button><Headset className="icon" style={{fontSize: 50}}/></button>
                <button><Straighten className="icon" style={{fontSize: 50}}/></button>
                <button><Theaters className="icon" style={{fontSize: 50}}/></button>
                <button><Brush className="icon" style={{fontSize: 50}}/></button>
            </div>
            <div className="right">
            <h1>Hobbies & Other Interests</h1>
            <h2>I work as a music producer that sells instrumentals to artists and am also proficient in playing the piano. 
                I enjoy watching movies, writing my own screenplays, and creating artwork in my spare time.</h2>
            </div>
         
        </div>
    )
}