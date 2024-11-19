import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {ButtonComp,InputFieldComp} from '../component/FromFiledComp';
import {useAuth} from '../page/AuthProvider'
import axios from 'axios';



function Login() {
  const [validated, setValidated] = useState(false);
  const { setIsLogin } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({
    mobile: '',
    password: '',
  });
  
  const onChangeHandel = (e)=>{
    setData(pre=>({...pre,[e.target.name]:e.target.value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
        //login funnction
        axios.post("http://localhost:8081/user/login",
          data,
          {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
          
        })
          .then(function (response) {
            console.log("Login successful", response.data);
            //reset
              setData({
                mobile: '',
                password: '',
              })
            navigate("/login");
          })
          .catch(function (error) {
              console.log(error);
          });

        
        //setIsLogin(true);
        //navigate('/');
    }

    

    //validation agian true
    setValidated(true);
  };


 

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <h3>Login</h3>
      
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
          type='password' 
          placeholderName='Password' 
          requiredValue={true} 
          controlId='registerField5' 
          name="password"
          value={data.password}
          onChange={onChangeHandel}
         />

       
      
      </Row>
      
      <ButtonComp type="danger" name='Login' onClickHandle={()=>{}}/>
      
    </Form>
  );
}

export default Login;