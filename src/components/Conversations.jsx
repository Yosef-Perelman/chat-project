import bootstrap from 'bootstrap';
import { Button, Col, Row, Form, ListGroup, Card, Tab, InputGroup, FormControl, DropdownButton, Dropdown, Nav } from 'react-bootstrap';
import "./Conversations.css"
import NaviMe from '../items/NaviMe';
import ConvBoard from '../items/ConversationBoard';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


function Conversations() {
    // sending this func to ConversationBoard and back to NaviMe with a value
    const [lastMessage, setLastMessage] = useState(["hi"]);

    const location = useLocation();
    const username = location.state.name;
    console.log(username);

    const [initialNames, setinitialNames] = useState([{ name: "hem" }, { name: "dad" }, { name: "buddy" }, { name: "worst enemy" }, { name: "best friend" }]);
    const [initiNames, setInitiNames] = useState([{ name: "hem" }, { name: "dad" }, { name: "buddy" }, { name: "worst enemy" }, { name: "best friend" }])
    const [lastMessageList, setLastMessageList] = useState(["a", "b", "c", "d", "e"]);

    const listNames = initiNames.map((now, key) => {
        return <NaviMe name={now.name} key={key} lastMessage={lastMessageList[key]} />
    });
    const listBoards = initialNames.map((now, key) => {
        return <ConvBoard name={now.name} key={key} setLastMessage={setLastMessageList} lastMessageList={lastMessageList} index={key} />
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
                                <span class="d-block p-2 bg-primary text-white">
                                    <table>
                                        <td className='rowspan'>
                                            <img className='profilePicture' src="frog2.jpg"></img>
                                        </td>
                                        <td>
                                            <tr>
                                                <b>{username}'s Chat!</b>
                                            </tr>
                                            <tr>
                                                <button className='addFriend' onClick={addContact}>Add contact member</button>
                                            </tr>
                                        </td>
                                    </table>
                                </span>
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