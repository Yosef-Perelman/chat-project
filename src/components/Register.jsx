import { Link, useNavigate } from 'react-router-dom';
import bootstrap from 'bootstrap';
import { Button, Col, Row, Container } from 'react-bootstrap';

function Register() {

    return (

        <Container>
            <form>
                <Row>
                    <Col>Username:</Col>
                    <Col> <input placeholder="username" /> </Col>
                </Row>
                <Row>
                    <Col>password:</Col>
                    <Col> <input placeholder="Password" /> </Col>
                </Row>
                <Row>
                    <Col>Repeat password:</Col>
                    <Col> <input placeholder="write password again" /> </Col>
                </Row>
                <Button variant="primary">
                    Register!
                </Button>
            </form>
            <p className='center'> If you are already registered , <Link to={'/'}>Login!</Link> </p>


        </Container>
    );
}




export default Register;
