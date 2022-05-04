import { Nav } from "react-bootstrap";
import "./NaviMe.css"


function NaviMe({ name, lastMessage }) {

    return (
        <Nav.Item>
            <Nav.Link eventKey={name}>{name}</Nav.Link>
            <p className="p"> {lastMessage}</p>
        </Nav.Item >
    );
}

export default NaviMe;