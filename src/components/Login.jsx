import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Row, Container } from 'react-bootstrap';

const users = [{ username: "Ariel", password: "Mantel" }, { username: "Yosef", password: "Perelman" }];

function Login({ usersList }) {
    console.log(usersList);
    const navigate = useNavigate();

    const verify = () => {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var is_true = false;
        var i = 0;
        for (; i < users.length; i++) {
            if (username === usersList[i].userName && password === usersList[i].password) {
                is_true = true;
                break;
            }
        }
        if (is_true) {
            navigate('/Conversations', { state: { name: usersList[i].nickName } });
        }
        else {
            alert("WRONG");
        }
    }

    return (
        <div class="form-horizontal">
            <Container class="col text-center">
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
                        </Col>
                        </Row>
                        <div class="text-center" style={{"margin": "10px"}}>
                            <Button class='marginFive' onClick={verify} style={{"margin": "5px", "float": "left"}}>
                                Log In!
                            </Button>                   
                    <p className="center rounded" > If you are not registered yet, <Link to={'Register'}>Register</Link> </p>
                    </div>
                </form>


            </Container >
        </div>
    );
}

export default Login;