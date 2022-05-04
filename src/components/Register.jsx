import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import './Register.css'

function Register({ changeUsersList }) {

    const [loginDetails, setLoginDetails] = useState({
        userName: "",
        password: "",
        nickName: "",
        profilePic: ""
    });

    const navigate = useNavigate();

    const uploadImage = (e) => {
        let val = e.target.files[0]
        let content = URL.createObjectURL(val)
        setLoginDetails({ ...loginDetails, profilePic: content })
    }

    const verify = () => {
        var pass = document.getElementById('pass').value;
        var passAgain = document.getElementById('passAgain').value;
        var userName = document.getElementById('userName').value;
        var nickName = document.getElementById('nickName').value;

        if (pass == passAgain && userName != "") {
            changeUsersList((usersList) => [...usersList, loginDetails]);
            navigate('/Conversations', { state: { name: loginDetails.username, profilePic: loginDetails.profilePic } })
        }
        else {
            alert("WRONG");
        }
    }

    return (
        <div class="form-horizontal">
            <Container class="col">
                <form>
                    <Row>
                        <Col>Username:</Col>
                        <Col> <input id='userName' class='inputSqure' placeholder="Username" onChange={(e) => {
                            setLoginDetails({ ...loginDetails, username: e.target.value })
                        }} /> </Col>
                    </Row>
                    <Row>
                        <Col>Nickname:</Col>
                        <Col> <input id='nickName' class='inputSqure' placeholder="Nickname" onChange={(e) => {
                            setLoginDetails({ ...loginDetails, nickname: e.target.value })
                        }} /> </Col>
                    </Row>
                    <Row>
                        <Col>password:</Col>
                        <Col> <input id="pass" class='inputSqure' type="password" placeholder="Password" onChange={(e) => {
                            setLoginDetails({ ...loginDetails, password: e.target.value })
                        }} /> </Col>
                    </Row>
                    <Row>
                        <Col>Repeat password:</Col>
                        <Col> <input id="passAgain" class='inputSqure' type='password' placeholder="write password again" /> </Col>
                    </Row>
                    <Row>
                        <Col>picture:</Col>
                        <Col>

                            <label for="uploadImg">
                                upload image
                                <input type={"file"} id="uploadImg" hidden={true}
                                    onChange={(e) => uploadImage(e)} />
                            </label>

                        </Col>
                    </Row>
                </form>
                <div class="text-center" style={{ "margin": "10px" }}>
                    <Button variant="primary" style={{ "margin": "5px", "float": "left" }} onClick={verify}>
                        Register!
                    </Button>
                    <p className='center rounded'> If you are already registered , <Link to={'/'}>Login!</Link> </p>
                </div>
            </Container>
        </div>
    );
}

export default Register;
