import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

function CardsComp({name,bloodgroup,mob,donatedNoOfTime,lastDonatedDate}) {
  return (
    <Card className="text-left">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Stack direction="horizontal" gap={3}>
            <div className="p-2">
                <Card.Text>{mob}</Card.Text>
                <h5>🩸 {bloodgroup} </h5>
            </div>
            <div className="p-2 ms-auto"> 
                Donations count : <Button variant="danger">{donatedNoOfTime}</Button>
                <p>Last Don. Date : {lastDonatedDate}</p>
            </div>
        </Stack>
      
      </Card.Body>
     
    </Card>
  );
}



export default CardsComp


