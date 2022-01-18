import "./contact.scss"
import { useState } from "react";

export default function Contact() {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll get back soon :)</span>}
                </form>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/wave.png" alt=""/>
                </div>
            </div>
        </div>
    )
}