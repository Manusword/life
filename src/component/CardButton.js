import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import backendURL from "../page/backendUrl";
import axios from 'axios';
//const URl = backendURL + "keepcoding/clients/update";

function CardButton({id,name,fieldName,funAdd,funSub,defaultpost}) {

    const [totalpost,setTotalpost] = useState(defaultpost);
    const [flag,setflag] = useState(false);
    
    const AddFunction=()=>{
        setTotalpost(totalpost+1);
        setflag(true);
    }

    const SubFunction=()=>{
        setTotalpost(totalpost-1)
        setflag(true);
    }

    useEffect(()=>{
       if(flag){
            const newurl = backendURL + `keepcoding/clients/update?id=${id}&fieldname=${fieldName}&value=${totalpost}`;
            axios.patch(newurl)
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },[totalpost])



  return (
   <>
     <Container>
        <Row >
            <Col>{name}</Col>
            <Col>
                <Button variant="danger"  onClick={AddFunction} >+</Button>
                    <span style={{padding:'3px'}}>{totalpost}</span>
                <Button variant="success"  onClick={SubFunction}>-</Button>
            </Col>
        </Row>
    </Container>
   
   </>
  )
}

export default CardButton