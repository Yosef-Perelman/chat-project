import "./User.css"
import { useState } from "react";
import { Button, Col, Row, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function User() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    const [nickName, setnickName] = useState('');

    function enterUserName() {
        setUserName(document.getElementById('userName').value);
    }

    function enterPassword() {
        setPassword(document.getElementById('password').value);
    }

    function enterNickName() {
        setnickName(document.getElementById('nickName').value);
    }

    function createUser(){
        enterUserName();
        enterPassword();
        enterNickName();
    }

    return (
        <div>
            <div>
                userName = {userName}
            </div>
            <div>
                nickName = {nickName}
            </div>
            <div>
                password = {password}
            </div>
            <Container>
                <form>
                    <Row>
                        <Col>Username:</Col>
                        <Col> <input placeholder="username" id='userName' /> </Col>
                    </Row>
                    <Row>
                        <Col>Nickname:</Col>
                        <Col> <input placeholder="username" id='nickName' /> </Col>
                    </Row>
                    <Row>
                        <Col>password:</Col>
                        <Col> <input placeholder="Password" id='password' /> </Col>
                    </Row>
                    <Row>
                        <Col>Repeat password:</Col>
                        <Col> <input placeholder="write password again" id='verifiedPassword' /> </Col>
                    </Row>
                    <Button variant="primary" onClick={createUser}>
                        Register!
                    </Button>
                </form>
                <p className='center'> If you are already registered , <Link to={'/'}>Login!</Link> </p>
            </Container>
        </div>
    );
}