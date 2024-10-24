import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardButton from './CardButton';


function ClientComp({id,clientName,youtube,facebook,reels,graphics}) {


  return (
    <Card style={{ width: '18rem', marginTop:'20px' }}>
      <Card.Body>
        <Card.Title>{clientName}</Card.Title>
      </Card.Body>
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item><CardButton id={id} name='Youtube' fieldName='youtube' defaultpost={youtube}  /></ListGroup.Item>
        <ListGroup.Item><CardButton id={id} name='FaceBook' fieldName='facebook' defaultpost={facebook}  /> </ListGroup.Item>
        <ListGroup.Item><CardButton id={id} name='Reels' fieldName='reels' defaultpost={reels}  /> </ListGroup.Item>
        <ListGroup.Item><CardButton id={id} name='Graphics' fieldName='graphics' defaultpost={graphics}  /> </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ClientComp;