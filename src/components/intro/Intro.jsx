import "./intro.scss"
import {KeyboardArrowDownSharp} from "@material-ui/icons"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="wrapper">
                <center>
                <h2>Hi, I'm</h2>
                <h1>Collier Hawkins</h1>
                <h3>CSC 4720 - Human Computer Interaction - Spring 2022</h3>
                <h4>Instructed by Carol Bales</h4>
                <br/>
                <a href="#about"><button className="btn">Learn more</button></a>
                </center>
            </div>
        </div>
    )
}