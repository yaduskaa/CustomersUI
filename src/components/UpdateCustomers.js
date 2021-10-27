import { useState } from 'react'
import {Card, CardBody, CardTitle,Input,Container,Button} from 'reactstrap' 
import axios from 'axios'
import base_url from '../service/serviceapi'
import { useEffect } from 'react/cjs/react.development'
const UpdateCustomers=(props)=>{
    const[customer,setCustomers]=useState({})

    const getAllCustomersFromServerById=()=>{
        axios.get(`${base_url}/get/customers/${props.location.param}`).then(
            (response)=>{
                setCustomers(response.data)
                console.log(`${base_url}/id/${props.location.param}`)
            }
        )
    }
    useEffect(()=>{
        getAllCustomersFromServerById()
    },[])
    const handleForm=(param)=>{
        putData(customer)
        param.preventDefault()
    }
   
    const putData=(data)=>{
        axios.put(`${base_url}/update/customers/${data.id}`,data).then(
            (response)=>{
                console.log("updated successfully")
            }
        )
    }
    return(
        <Card body inverse color="primary">
        <CardBody>
            <form onSubmit={handleForm}>
                <CardTitle className="display-2">
                    Update Customer
                    </CardTitle>
                    <Input placeholder="Enter the name" value={customer.name} 
                    onChange={(param)=>{
                            setCustomers({...customer,name:param.target.value})}}/>
                    <br/>
                    <Input placeholder="Enter the phoneno here" value={customer.phoneno}
                    onChange={(param)=>{
                            setCustomers({...customer,phoneno:param.target.value})}}/>
                    <br/>
                    <Input placeholder="Enter the emailid here" value={customer.emailid}
                    onChange={(param)=>{
                            setCustomers({...customer,emailid:param.target.value})}}/>
                    <br/>
                    <Container>
                        <Button type="submit"color="success" style={{marginRight:15+"px"}}>
                            Update Customer
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
    export default UpdateCustomers
