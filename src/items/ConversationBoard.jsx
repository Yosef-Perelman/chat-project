import bootstrap from 'bootstrap';
import { Button, Col, Row, Form, ListGroup, Card, Tab, InputGroup, FormControl, DropdownButton, Dropdown, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Message from './Message';
import { useRef, useState } from 'react';
import "./conversationBoard.css"

function ConvBoard({ name }) {

    const [initMessageList, setMessageList] = useState([])

    const messageList = initMessageList.map((now, key) => {
        return <Message text={now.text} key={key} type={now.type} imgSrc={now.imgSrc} />
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
        console.log(initMessageList);
    }

    const onKeyFunc = function onKeyEnter(e) {
        if (e.key === "Enter" && newText.current.value != "") {
            { addMessage() };
        }
    }



    const uploadImage = (e) => {
        console.log(name);
        let val = e.target.files[0]
        let content = URL.createObjectURL(val)
        setMessageList([...initMessageList, {
            text: "i am image",
            key: initMessageList.length,
            imgSrc: content,
            type: "image",
            me_or_friend: "me"
        }])
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
                    <label for={name}>
                        upload image
                        <input type={"file"} id={name} hidden={true}
                            onChange={(e) => uploadImage(e)} />
                    </label>
                </DropdownButton>
                <Button variant="outline-secondary" onClick={addMessage}>send</Button>
            </InputGroup>

        </Tab.Pane>
    );
}

export default ConvBoard;