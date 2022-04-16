import bootstrap from 'bootstrap';
import { Button, Col, Row, Form, ListGroup, Card, Tab, InputGroup, FormControl, DropdownButton, Dropdown, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Message from './Message';
import { useRef, useState } from 'react';
import "./conversationBoard.css"

function ConvBoard({ name }) {

    const [initMessageList, setMessageList] = useState([])

    const messageList = initMessageList.map((now, key) => {
        return <Message text={now.text} key={key} />
    });

    let newText = useRef(null);

    const addMessage = () => {
        if (newText.current.value != "") {
            setMessageList([...initMessageList, {
                text: newText.current.value,
                key: initMessageList.length
            }])
            newText.current.value = ""
        }
    }

    const onKeyFunc = function onKeyEnter(e) {
        if (e.key === "Enter" && newText.current.value != "") {
            { addMessage() };
        }
    }

    const sendImage = function sendImage() {

    }

    return (
        <Tab.Pane eventKey={name}>
            <Card className='card'>
                <extraWarper className="extra">
                    {messageList}
                </extraWarper>
            </Card>
            <InputGroup>
                <FormControl className='inputLine' ref={newText}
                    placeholder="your text" onKeyPress={onKeyFunc}
                />
                <Button variant="outline-secondary">record</Button>
                <DropdownButton title="upload" variant="outline-secondary">
                    <label htmlFor="filePicker" style={{ background: "grey", padding: "5px 10px" }}>
                        Send image
                    </label>
                    <input id="filePicker" style={{ visibility: "hidden" }} type={"file"} onChange={sendImage} />
                </DropdownButton>
                <Button variant="outline-secondary" onClick={addMessage}>send</Button>
            </InputGroup>
        </Tab.Pane>
    );
}

export default ConvBoard;