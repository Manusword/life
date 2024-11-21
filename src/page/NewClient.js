import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import backendURL from "./backendUrl";
import ClientList from './ClientList';
import {ButtonComp,InputFieldComp} from '../component/FromFiledComp';
const URL = backendURL + "keepcoding/clients/list";

function NewClient() {
    const [clients,setClient] = useState([])
    const [editid, setEditid] = useState(null);
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
        }
        else{
            //register api    
            let newurl = ""; 
            let newmessage = "";   
            if(editid){
                //update link
                newurl = backendURL + `keepcoding/clients/edit/${editid}`;
                newmessage="Updated successful";
            }else{
                //new entry link
                newurl = backendURL + `keepcoding/clients/new`;
                newmessage="New client added successful";
            }
            axios.post(newurl,
                data,
                {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(function (response) {
                //console.log("Registration successful", response.data);
                setMessage(newmessage);
                setEditid(null)
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



    //client list page 
    useEffect(() => {
        axios.get(URL)
        .then(function (response) {
            setClient(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [editid]); //loading multiple time
    
    const onClickEdit =(id)=>{
        const editData = clients.find(val=>val._id === id)
        setEditid(id)
        setData({...editData})
    }

    const onClickdelete =(id)=>{
        let result = window.confirm("Do you want to Delete?");
        if (result) {
            //delete
            let newurl = backendURL + `keepcoding/clients/${id}`;
            let newmessage="client deleted successful";
            axios.delete(newurl,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(function (response) {
                setMessage(newmessage);
                setClient(oldData => oldData.filter(val => val._id !== id))
            })
            .catch(function (error) {
                console.log(error);
            });
        } //if (result) {
    }
    //client list page 

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
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
                length={12}
            />
        </Row>
        
        <Row className="mb-3">
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
      
      <ButtonComp type="success" name={editid ? 'Update' : "Save"} onClickHandle={()=>{}}/>
      <h2 style={{color:"green"}}>{message}</h2>
    </Form>
    <hr/>
    <ClientList clients={clients} onClickEditFun={onClickEdit} onClickdeleteFun={onClickdelete}/>
    </>
  );
}

export default NewClient;