import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardButton from './CardButton';


function ClientComp({clientName,youtube,facebook,reels,graphics}) {


  return (
    <Card style={{ width: '18rem', marginTop:'20px' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        <Card.Title>{clientName}</Card.Title>
      </Card.Body>
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item><CardButton id='' name='Youtube'  defaultpost={youtube}  /></ListGroup.Item>
        <ListGroup.Item><CardButton id='' name='FaceBook'  defaultpost={facebook}  /> </ListGroup.Item>
        <ListGroup.Item><CardButton id='' name='Reels'  defaultpost={reels}  /> </ListGroup.Item>
        <ListGroup.Item><CardButton id='' name='Graphics'  defaultpost={graphics}  /> </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ClientComp;