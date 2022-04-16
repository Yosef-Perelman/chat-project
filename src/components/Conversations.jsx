import bootstrap from 'bootstrap';
import { Button, Col, Row, Form, ListGroup, Card, Tab, InputGroup, FormControl, DropdownButton, Dropdown, Nav } from 'react-bootstrap';
import "./Conversations.css"
import NaviMe from '../items/NaviMe';
import ConvBoard from '../items/ConversationBoard';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


function Conversations() {
    const location = useLocation();
    const username = location.state.name;

    const [initialNames, setinitialNames] = useState([{ name: "hem" }, { name: "dad" }, { name: "buddy" }, { name: "worst enemy" }, { name: "best friend" }]);
    const [initiNames, setInitiNames] = useState([{ name: "hem" }, { name: "dad" }, { name: "buddy" }, { name: "worst enemy" }, { name: "best friend" }])


    const listNames = initiNames.map((now, key) => {
        return <NaviMe name={now.name} key={key} />
    });
    const listBoards = initialNames.map((now, key) => {
        return <ConvBoard name={now.name} key={key} />
    });


    const addContact = () => {
        let newContact = prompt("New contact name:");
        setinitialNames([...initialNames, {
            name: newContact,
            key: initialNames.length
        }])
        setInitiNames([...initialNames, {
            name: newContact,
            key: initialNames.length
        }])
    }

    return (
        <>

            <Tab.Container id="everything">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className='chatMenu'>
                                <Nav.Link className='userAnnounce'>{username}'s Chat!</Nav.Link>
                                <button className='addFriend' onClick={addContact}>Add</button>
                            </Nav.Item>
                            {listNames}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {listBoards}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>



        </>
    );
}

export default Conversations;