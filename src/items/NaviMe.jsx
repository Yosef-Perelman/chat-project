import { Nav } from "react-bootstrap";

function NaviMe({ name }) {
    return (
        <Nav.Item>
            <Nav.Link eventKey={name}>{name}</Nav.Link>
        </Nav.Item>
    );
}

export default NaviMe;