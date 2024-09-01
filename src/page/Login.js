import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {ButtonComp,InputFieldComp} from '../component/FromFiledComp';
import {useAuth} from '../page/AuthProvider'



function Login() {
  const [validated, setValidated] = useState(false);
  const { setIsLogin } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
        //login funnction
        setIsLogin(true);
        navigate('/');
    }

    

    //validation agian true
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <h3>Login</h3>
        <InputFieldComp labelName='' type='text' placeholderName='Mobile' defaultValue='' requiredValue={true}
        controlId='loginField1' />

        <InputFieldComp labelName='' type='password' placeholderName='Password' defaultValue='' requiredValue={true} controlId='loginField2' />
      
      </Row>
      
      <ButtonComp type="danger" name='Login' onClickHandle={()=>{}}/>
      
    </Form>
  );
}

export default Login;