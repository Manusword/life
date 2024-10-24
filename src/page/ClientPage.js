import ClientComp from "../component/ClientComp"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect,useState } from "react";
import axios from 'axios';
import backendURL from "./backendUrl";
const URl = backendURL + "keepcoding/clients/list";

function ClientPage() {
 const [clients,setClient] = useState([])
 
  useEffect(() => {
    axios.get(URl)
      .then(function (response) {
          setClient(response.data);
      })
      .catch(function (error) {
          console.log(error);
      });
  }, []); 

  return (
    <>
      <Container>
        <Row>
        {
          clients.map((client,index)=>{
            return(
                <Col key={index}> 
                    <ClientComp 
                      key={client['_id']}
                      id={client['_id']}
                      clientName={client.name}
                      youtube={client.youtube}
                      facebook={client.facebook}
                      reels={client.reels}
                      graphics={client.graphics}
                    />
                </Col>
            )
          })
        }
        </Row>
      </Container>
    </>
  )
}

export default ClientPage


