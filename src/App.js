import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,Navbar, Col, Button,  Form, FormGroup, Jumbotron } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
      <Navbar  className="App-nav" expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#">HOME</Navbar.Brand>
          <Navbar.Brand href="#">ABOUT</Navbar.Brand>
          <Navbar.Brand href="#" >CONTACT</Navbar.Brand>
        </Navbar>
      </Container>

      <Jumbotron> 
      <label className="App-title">CONTACT</label>

      <Form className="App-form">
        <Form.Row>
         <Form.Group as={Col}>
          <Form.Control placeholder="First name" />
         </Form.Group>

         <Form.Group as={Col}>
          <Form.Control placeholder="Last name" />
         </Form.Group>
        </Form.Row>

        <Form.Group>
         <Form.Control placeholder="Email address" />
        </Form.Group>

        <Form.Group>
         <Form.Control placeholder="Subject" />
        </Form.Group>

        <Form.Group>
          <Form.Control as="textarea" rows={5} placeholder="Your message"/>
        </Form.Group>
       
        <Button type="submit"  variant="danger"  size="lg" block>Submit</Button>
     </Form>    
     
       </Jumbotron>

      </header>
    </div>
  );
}

export default App;
