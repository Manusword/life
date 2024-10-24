import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function CardButton({id,name,funAdd,funSub,defaultpost}) {

    const [totalpost,setTotalpost] = useState(defaultpost)
    
    const AddFunction=()=>{
        setTotalpost(totalpost+1)
    }

    const SubFunction=()=>{
        setTotalpost(totalpost-1)
    }


  return (
   <>
     <Container>
        <Row>
            <Col md={5}>{name}</Col>
            <Col md={7}>
                <Button variant="danger" style={{margin:'5px'}} onClick={AddFunction} >+</Button>
                    {totalpost}
                <Button variant="success" style={{margin:'5px'}} onClick={SubFunction}>-</Button>
            </Col>
        </Row>
    </Container>
   
   </>
  )
}

export default CardButton