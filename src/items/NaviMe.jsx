import { Nav } from "react-bootstrap";

function NaviMe({ name, lastMessage }) {
    let last_message;
    if (name === lastMessage.toString().split(" ")[0]) {
        last_message = lastMessage.toString().split(" ");
        last_message.shift();
        last_message.join();
    }
    return (
        <Nav.Item>
            <Nav.Link eventKey={name}>{name}</Nav.Link>
            <p>{last_message}</p>
        </Nav.Item>
    );
}

export default NaviMe;