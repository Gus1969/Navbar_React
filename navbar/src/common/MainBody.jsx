import React from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainBody.css';
import {Container, CardGroup, Card} from 'react-bootstrap';
import "../App.css";


const MainBody = () => {
    return (
     // const state[show, setShow] = 
        <Container>
        <CardGroup>
  <Card className="CardHolder">
    <Card.Img className="Picture" variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"/>
    <Card.Body>
      <Card.Title className="title">Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> Footer content</small>
    </Card.Footer>
  </Card>
  <Card className="CardHolder">
    <Card.Img className="Picture" variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
    <Card.Body>
      <Card.Title className="title">Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Lorem ipsum dolor sit amet consectetur.</small>
    </Card.Footer>
  </Card>
  <Card className="CardHolder">
    <Card.Img className="Picture" variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
    <Card.Body>
      <Card.Title className="title">Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Footer content</small>
    </Card.Footer>
  </Card>
</CardGroup>
<h2>Here starts another section</h2>
</Container>




    )
}
export default MainBody;
