import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import './Register.css'

function Register({ changeUsersList }) {

    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: "",
        nickname: "",
        pictureProfile: ""
    });

    const navigate = useNavigate();

    return (  
        <div class="form-horizontal">
            <Container class="col">
                <form>
                    <Row>
                        <Col>Username:</Col>
                        <Col> <input class='inputSqure' placeholder="Username" onChange={(e) => {
                            setLoginDetails({ ...loginDetails, username: e.target.value })
                        }} /> </Col>
                    </Row>
                    <Row>
                        <Col>Nickname:</Col>
                        <Col> <input class='inputSqure' placeholder="Nickname" onChange={(e) => {
                            setLoginDetails({ ...loginDetails, nickname: e.target.value })
                        }} /> </Col>
                    </Row>
                    <Row>
                        <Col>password:</Col>
                        <Col> <input class='inputSqure' type="password" placeholder="Password" onChange={(e) => {
                            setLoginDetails({ ...loginDetails, password: e.target.value })
                        }} /> </Col>
                    </Row>
                    <Row>
                        <Col>Repeat password:</Col>
                        <Col> <input class='inputSqure' type='password' placeholder="write password again"/> </Col>
                    </Row>
                    <Row>
                        <Col>picture:</Col>
                        <Col> <input type='file' onChange={(e) => {
                            setLoginDetails({ ...loginDetails, pictureProfile: e.target.value })
                        }} /> </Col>
                    </Row>
                    <Button variant="primary" onClick={() => {
                        console.log(`new user registered: ${loginDetails.username}`);
                        changeUsersList((usersList) => [...usersList, loginDetails]);
                        navigate('/Conversations', { state: { name: loginDetails.username } })
                    }}>
                        Register!
                    </Button>
                </form>
                <p className='center'> If you are already registered , <Link to={'/'}>Login!</Link> </p>
            </Container>
        </div>
    );
}

export default Register;
