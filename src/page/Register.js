import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import {ButtonComp,InputFieldComp} from '../component/FromFiledComp';

function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <h3>Register</h3>

        <InputFieldComp labelName='' type='text' placeholderName='Full Name' defaultValue='' requiredValue={true}
        controlId='registerField1' />


        <InputFieldComp labelName='' type='text' placeholderName='Mobile' defaultValue='' requiredValue={true}
        controlId='registerField2' />

        <InputFieldComp labelName='' type='text' placeholderName='Blood Group' defaultValue='' requiredValue={true} controlId='registerField3' />

        <InputFieldComp labelName='' type='text' placeholderName='Location' defaultValue='' requiredValue={true} controlId='registerField4' />

        <InputFieldComp labelName='' type='password' placeholderName='Password' defaultValue='' requiredValue={true} controlId='registerField5' />

        <InputFieldComp labelName='' type='password' placeholderName='Re-enter Password' defaultValue='' requiredValue={true} controlId='registerField6' />
      
      </Row>
      
      <ButtonComp type="danger" name='Register' onClickHandle={()=>{}}/>
      
    </Form>
  );
}

export default Register;