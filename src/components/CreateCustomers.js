import axios from 'axios'
import { useState } from 'react'
import {Card, CardBody, CardTitle,Input,Container,Button} from 'reactstrap'
import base_url from '../service/serviceapi'
const CreateCustomers=()=>{
    const[customer,setCustomers]=useState({})
    const handleForm= (param)=>{
        postData(customer)
        param.preventDefault()
    }
    const postData=(data)=>{
        axios.post(`${base_url}/customers`,data).then(
            (response)=>{
                console.log("created successfully")
            }
        )
    }
    return(
        <Card body inverse color="primary">
            <CardBody>
                <form onSubmit={handleForm}>
                    <CardTitle className="display-2">
                        New Customer
                        </CardTitle>
                        <Input placeholder="Enter the name" 
                        onChange={(param)=>{
                            setCustomers({...customer,name:param.target.value})
                        }}/>
                        <br/>
                        <Input placeholder="Enter the phoneno here" 
                        onChange={(param)=>{
                            setCustomers({...customer,phoneno:param.target.value})
                        }}/>
                        <br/>
                        <Input placeholder="Enter the emailid here" 
                        onChange={(param)=>{
                            setCustomers({...customer,emailid:param.target.value})
                        }}/>
                        <br/>
                        <Container>
                            <Button type="submit"color="success" style={{marginRight:15+"px"}}>
                                Create Customer
                                </Button>
                                <Button type="reset" color="warning">
                                    Clear
                                    </Button>
                            </Container>
                            </form>
                </CardBody>
        </Card>
    )
    }
    export default CreateCustomers
