import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';


import {ButtonComp,InputFieldComp} from '../component/FromFiledComp';

function Register() {
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState({
    fullname: '',
    mobile: '',
    password: '',
    rePassword: '',
    blood: '',
    address: '',
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
      if(data.password !== data.rePassword){
        alert('Password not matched');
        event.stopPropagation();
      }else{
        //register api
          axios.post("http://localhost:8081/user/register",
            data,
            {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            
          })
            .then(function (response) {
              console.log("Registration successful", response.data);
                //reset
                setData({
                  fullname: '',
                  mobile: '',
                  password: '',
                  rePassword: '',
                  blood: '',
                  address: '',
                })
            })
            .catch(function (error) {
                console.log(error);
            });
      }
    }

    
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <h3>Register</h3>

        <InputFieldComp
          labelName=""
          type="text"
          placeholderName="Full Name"
          requiredValue={true}
          controlId="registerField1"
          name="fullname"
          value={data.fullname}
          onChange={onChangeHandel}
        />


        <InputFieldComp 
          labelName='' 
          type='text' 
          placeholderName='Mobile' 
          equiredValue={true}
          controlId='registerField2' 
          name="mobile"
          value={data.mobile}
          onChange={onChangeHandel}
        />

        <InputFieldComp 
          labelName='' 
          type='text' 
          placeholderName='Blood Group' 
          requiredValue={true} 
          controlId='registerField3'
          name="blood"
          value={data.blood}
          onChange={onChangeHandel}
         />

        <InputFieldComp 
          labelName='' 
          type='text' 
          placeholderName='Location' 
          requiredValue={true} 
          controlId='registerField4' 
          name="address"
          value={data.address}
          onChange={onChangeHandel}
        />

        <InputFieldComp 
          labelName='' 
          type='password' 
          placeholderName='Password' 
          requiredValue={true} 
          controlId='registerField5' 
          name="password"
          value={data.password}
          onChange={onChangeHandel}
         />

        <InputFieldComp 
          labelName='' 
          type='password' 
          placeholderName='Re-enter Password' 
          requiredValue={true} 
          controlId='registerField6' 
          name="rePassword"
          value={data.rePassword}
          onChange={onChangeHandel}
        />
      
      </Row>
      
      <ButtonComp type="danger" name='Register' onClickHandle={()=>{}}/>
      
    </Form>
  );
}

export default Register;