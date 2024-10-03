import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function ButtonComp({type,name,onClickHandle}) {
  return (
    <>
        <Button variant={type} type="submit" onClick={onClickHandle}>{name}</Button>
    </>
  )
}

function InputFieldComp({labelName,type,placeholderName,defaultValue,requiredValue,controlId,name,value,onChange}) {
  return (
    <>
        <Form.Group as={Col} md="4" controlId={controlId}>
          <Form.Label>{labelName}</Form.Label>
          <Form.Control
            required={requiredValue}
            type={type}
            placeholder={placeholderName}
            defaultValue={defaultValue}
            name={name}
            value={value}
            onChange={onChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    </>
  )
}

//export default Button;
export  {ButtonComp,InputFieldComp};