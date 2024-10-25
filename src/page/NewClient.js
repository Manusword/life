import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import backendURL from "./backendUrl";


import {ButtonComp,InputFieldComp} from '../component/FromFiledComp';

function NewClient() {
  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState('');
  const [data, setData] = useState({
    name: '',
    youtube:'',
    facebook:'',
    reels:'',
    graphics:'',
  });

  const onChangeHandel = (e)=>{
    setData((oldVal) => ({ ...oldVal, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
            //register api    
            const newurl = backendURL + `keepcoding/clients/new`;    
            axios.post(newurl,
                data,
                {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
                
            })
            .then(function (response) {
                //console.log("Registration successful", response.data);
                setMessage("new client added successful");
                //reset
                setData({
                     name: '',
                        youtube:'',
                        facebook:'',
                        reels:'',
                        graphics:'',
                })
            })
            .catch(function (error) {
                console.log(error);
            });
      
    }

    
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <h3>Register</h3>
      </Row>

        <Row className="mb-3">
            <InputFieldComp
                labelName="Client Name"
                type="text"
                placeholderName=""
                requiredValue={true}
                controlId="registerField1"
                name="name"
                value={data.name}
                onChange={onChangeHandel}
            />
        </Row>
        
        <Row className="mb-3">
            <h5>Default Value</h5>
            <InputFieldComp
                labelName="Youtube"
                type="number"
                placeholderName=""
                requiredValue={true}
                controlId="registerField2"
                name="youtube"
                value={data.youtube}
                onChange={onChangeHandel}
            />

            <InputFieldComp
                labelName="Facebook"
                type="number"
                placeholderName=""
                requiredValue={true}
                controlId="registerField3"
                name="facebook"
                value={data.facebook}
                onChange={onChangeHandel}
            />

            <InputFieldComp
                labelName="Reels"
                type="number"
                placeholderName=""
                requiredValue={true}
                controlId="registerField4"
                name="reels"
                value={data.reels}
                onChange={onChangeHandel}
            />

            <InputFieldComp
                labelName="Graphics"
                type="number"
                placeholderName=""
                requiredValue={true}
                controlId="registerField5"
                name="graphics"
                value={data.graphics}
                onChange={onChangeHandel}
            />
        </Row>
      
      <ButtonComp type="danger" name='Save' onClickHandle={()=>{}}/>
      <h2 style={{color:"green"}}>{message}</h2>
    </Form>
  );
}

export default NewClient;