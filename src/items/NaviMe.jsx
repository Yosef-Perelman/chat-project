import { Nav } from "react-bootstrap";
import "./NaviMe.css"
import h1 from "./h1.jpg"


function NaviMe({ name, lastMessage, lastTime }) {

    return (
        <Nav.Item>
            <div className="inlineClass">
                <Nav.Link className="inlineClass" eventKey={name}>
                    <img className='friend_pic' src={h1}></img>
                    {name}
                    <div className="sepe">
                        {lastTime}
                    </div>
                </Nav.Link>
            </div>
            <p className="p"> {lastMessage}</p>
        </Nav.Item >
    );
}

export default NaviMe;