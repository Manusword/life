import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import backendURL from "../page/backendUrl";
//const URl = backendURL + "keepcoding/clients/update";

function CardButton({id,name,fieldName,funAdd,funSub,defaultpost}) {

    const [totalpost,setTotalpost] = useState(defaultpost)
    
    const AddFunction=()=>{
        setTotalpost(totalpost+1)
    }

    const SubFunction=()=>{
        setTotalpost(totalpost-1)
    }

    useEffect(()=>{
        console.log(backendURL + `keepcoding/clients/update?id=${id}&name=${fieldName}&value=${totalpost}`);
    },[totalpost])


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