import { Nav } from "react-bootstrap";
<<<<<<< HEAD

function NaviMe({ name }) {
    return (
        <Nav.Item>
            <Nav.Link eventKey={name}>{name}</Nav.Link>
        </Nav.Item>
=======
import "./NaviMe.css"
import h1 from "./h1.jpg"


function NaviMe({ name, lastMessage, lastTime }) {
    return (
        <Nav.Item className="surr" style={{"height": "87px", "border": "solid", "border-radius": "5px", "border-width": "1px"}}>
            <div className="inlineClass">
                <Nav.Link className="inlineClass" eventKey={name}>
                    <img className='friend_pic' src={h1} alt=""></img>
                    <strong>{name}</strong>
                    <div className="sepe">  
                    {lastTime}<strong>{' >'}</strong> 
                        <span style={{"margin": "1px"}}> {lastMessage}</span>
                    </div>
                </Nav.Link>
            </div>
        </Nav.Item >
>>>>>>> trying-222
    );
}

export default NaviMe;