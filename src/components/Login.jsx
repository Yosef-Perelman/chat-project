import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Row, Container } from 'react-bootstrap';

const users = [{ username: "Ariel", password: "Mantel" }, { username: "Yosef", password: "Perelman" }];

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
        <div class="form-horizontal">
            <Container class="col">
                <form>
                    <Row>
                        <Col>Username:</Col>
                        <Col> <input class='inputSqure' placeholder="username" id='username' /> </Col>
                    </Row>
                    <Row>
                        <Col>password:</Col>
                        <Col> <input class='inputSqure' type='password' placeholder="Password" id='password' /> </Col>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Button class='marginFive' onClick={verify}>
                                Log In!
                            </Button>
                        </Col>
                    </Row>
                </form>
                <p className='center'> If you are not registered yet, <Link to={'Register'}>Register</Link> </p>


            </Container >
        </div>
    );
}

export default Login;