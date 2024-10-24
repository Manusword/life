import ClientComp from "../component/ClientComp"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ClientPage() {
  return (
    <>
     <Container>
      <Row>
        <Col> 
            <ClientComp 
              clientName='Om Hospital'  
              youtube={10}
              facebook={15}
              reels={20}
              graphics={25}
            />
        </Col>

        
      </Row>
    </Container>
     
     
    </>
  )
}

export default ClientPage


