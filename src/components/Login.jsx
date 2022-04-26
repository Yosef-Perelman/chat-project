import { Link, useNavigate } from 'react-router-dom';
import Register from './Register';
import "./Login.css"
import Conversations from './Conversations';
import bootstrap from 'bootstrap';
import { Button, Col, Row, Container } from 'react-bootstrap';
import User from '../items/User';

const users = [{ username: "Ariel", password: "Mantel" },
{ username: "Yosef", password: "Perelman" }];


function Login() {
    const navigate = useNavigate();

    const verify = () => {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var is_true = false;
        for (let i = 0; i < users.length; i++) {
            if (username == users[i].username && password == users[i].password) {
                is_true = true;
            }
        }
        if (is_true) {
            navigate('/Conversations', { state: { name: username } });
        }
        else {
            alert("WRONG");
        }
    }

    return (

        <Container>
            <form>
                <Row>
                    <Col>Username:</Col>
                    <Col> <input placeholder="username" id='username' /> </Col>
                </Row>
                <Row>
                    <Col>password:</Col>
                    <Col> <input placeholder="Password" id='password' /> </Col>
                </Row>
                <Button variant="primary" onClick={verify}>
                    Log In!
                </Button>
            </form>
            <p className='center'> If you are not registered yet, <Link to={'Register'}>Register</Link> </p>
        </Container >
    );
}

export default Login;