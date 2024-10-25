import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import {ButtonComp} from '../component/FromFiledComp';


function ClientList({clients,onClickEditFun}) {
    
    return (
        <Container style={{marginTop:"30px"}}>
            <Row >
                <h5>Client List</h5>
            </Row>
        <Row>
            <Col >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Client Name</th>
                            <th>Youtube</th>
                            <th>Facebook</th>
                            <th>Reels</th>
                            <th>Graphics</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients.map((client,index)=>{
                            return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{client.name}</td>
                                        <td>{client.youtube}</td>
                                        <td>{client.facebook}</td>
                                        <td>{client.reels}</td>
                                        <td>{client.graphics}</td>
                                        <td>
                                            <ButtonComp type="warning" name='Edit' onClickHandle={()=>onClickEditFun(client._id)} />
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
        </Container>
    )
}

export default ClientList

