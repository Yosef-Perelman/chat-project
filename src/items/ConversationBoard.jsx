import bootstrap from 'bootstrap';
import { Button, Col, Row, Form, ListGroup, Card, Tab, InputGroup, FormControl, DropdownButton, Dropdown, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Message from './Message';
import { useRef, useState } from 'react';
import "./conversationBoard.css"
import nice from "./nice.png"

function ConvBoard({ name, setLastMessage, lastMessageList, index, setLastTime, lastTimeList }) {
    let name1 = name + "1";
    let name2 = name + "2";


    const hardCodedMessages = [{ text: "blah", key: 0, me_or_friend: "friend", type: "text", thisTime: "15:14:13" },
    { text: "blah blah", key: 0, me_or_friend: "me", type: "text", thisTime: "15:15:15" },
    { text: "blah", key: 0, me_or_friend: "friend", type: "image", thisTime: "15:14:13", imgSrc: nice },
    { text: "blah", key: 0, me_or_friend: "me", type: "text", thisTime: "15:14:13" },
    ]

    const hardCodedMessagesReturn = hardCodedMessages.map((now, key) => {
        return <Message text={now.text} key={key} type={now.type} imgSrc={now.imgSrc} me_or_friend={now.me_or_friend} thisTime={now.thisTime} />
    })

    const [initMessageList, setMessageList] = useState([])

    const messageList = initMessageList.map((now, key) => {
        return <Message text={now.text} key={key} type={now.type} imgSrc={now.imgSrc} me_or_friend={now.me_or_friend} thisTime={now.thisTime} />
    });

    let newText = useRef(null);


    const addMessage = () => {
        if (newText.current.value != "") {
            let newArr = [...lastMessageList];
            newArr[index] = newText.current.value
            setLastMessage(newArr);

            let anotherArr = [...lastTimeList];
            anotherArr[index] = new Date().toLocaleTimeString();
            setLastTime(anotherArr);

            setMessageList([...initMessageList, {
                text: newText.current.value,
                key: initMessageList.length,
                me_or_friend: "me",
                type: "text",
                thisTime: new Date().toLocaleTimeString()
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
        let newArr = [...lastMessageList];
        newArr[index] = "image"
        setLastMessage(newArr);

        let anotherArr = [...lastTimeList];
        anotherArr[index] = new Date().toLocaleTimeString();
        setLastTime(anotherArr);

        let val = e.target.files[0]
        let content = URL.createObjectURL(val)
        setMessageList([...initMessageList, {
            text: "i am image",
            key: initMessageList.length,
            imgSrc: content,
            type: "image",
            me_or_friend: "me",
            thisTime: new Date().toLocaleTimeString()
        }])
    }

    const uploadVideo = (e) => {
        let newArr = [...lastMessageList];
        newArr[index] = "video"
        setLastMessage(newArr);

        let anotherArr = [...lastTimeList];
        anotherArr[index] = new Date().toLocaleTimeString();
        setLastTime(anotherArr);

        let val = e.target.files[0]
        let content = URL.createObjectURL(val)
        setMessageList([...initMessageList, {
            text: "i am video",
            key: initMessageList.length,
            imgSrc: content,
            type: "video",
            me_or_friend: "me",
            thisTime: new Date().toLocaleTimeString()
        }])
    }

    const uploadRecord = (e) => {
        let newArr = [...lastMessageList];
        newArr[index] = "record"
        setLastMessage(newArr);

        let anotherArr = [...lastTimeList];
        anotherArr[index] = new Date().toLocaleTimeString();
        setLastTime(anotherArr);

        let val = e.target.files[0]
        let content = URL.createObjectURL(val)
        setMessageList([...initMessageList, {
            text: "i am record",
            key: initMessageList.length,
            imgSrc: content,
            type: "record",
            me_or_friend: "me",
            thisTime: new Date().toLocaleTimeString()
        }])
    }

    return (
        <Tab.Pane eventKey={name}>
            <Card className='card'>
                <extraWarper className="extra">
                    {hardCodedMessagesReturn}
                    {messageList}
                </extraWarper>
            </Card>
            <InputGroup>
                <FormControl className='inputLine' ref={newText}
                    placeholder="your text" onKeyPress={onKeyFunc}
                />
                <Button variant="outline-secondary"><label for={name2}>
                    record
                    <input type={"file"} id={name2} hidden={true}
                        onChange={(e) => uploadRecord(e)} />
                </label></Button>
                <DropdownButton title="upload" variant="outline-secondary">
                    <Button>
                        <label for={name}>
                            upload image
                            <input type={"file"} id={name} hidden={true}
                                onChange={(e) => uploadImage(e)} />
                        </label>
                    </Button>
                    <Button>
                        <label for={name1}>
                            upload video
                            <input type={"file"} id={name1} hidden={true}
                                onChange={(e) => uploadVideo(e)} />
                        </label>
                    </Button>
                </DropdownButton>
                <Button variant="outline-secondary" onClick={addMessage}>send</Button>
            </InputGroup>

        </Tab.Pane>
    );
}

export default ConvBoard;