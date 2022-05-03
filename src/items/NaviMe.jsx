import { Nav } from "react-bootstrap";

function NaviMe({ name, lastMessage }) {

    return (
        <Nav.Item>
            <Nav.Link eventKey={name}>{name}</Nav.Link>
            <p>{lastMessage}</p>
        </Nav.Item>
    );
}

export default NaviMe;