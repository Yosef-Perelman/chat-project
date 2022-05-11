import { Nav } from "react-bootstrap";
import "./NaviMe.css"
import h1 from "./h1.jpg"


function NaviMe({ name, lastMessage, lastTime }) {
    return (
        <Nav.Item className="surr" style={{"height": "75px"}}>
            <div className="inlineClass">
                <Nav.Link className="inlineClass" eventKey={name}>
                    <img className='friend_pic' src={h1}></img>
                    {name}
                    <div className="sepe">
                        {lastTime}
                        <span style={{"margin": "2px"}}> {lastMessage}</span>
                    </div>
                </Nav.Link>
            </div>
        </Nav.Item >
    );
}

export default NaviMe;