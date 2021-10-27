import axios from 'axios'
import React from 'react'
import {Button, Card,CardBody,CardText,CardTitle,Container} from 'reactstrap'
import base_url from '../service/serviceapi'
import {Link} from 'react-router-dom'

 const Customer=({customer,update})=>{
     const deleteCustomer=(id)=>{
         axios.delete(`${base_url}/delete/customers/${id}`).then(
         (response)=>{
             console.log("deleted successfully")
             console.log(`${base_url}/delete/customers/${id}`)
             update(id)
         }
         )
     }
    return(
        <Card body inverse color="primary">
            <CardBody>
                <CardTitle className="font-weight-bold">
                    {customer.name}
                    </CardTitle >
                    <CardText>{customer.emailid} </CardText>
                    <CardText>{customer.phoneno} </CardText>
                    <Container>
                      <Link className= "btn btn-primary" to={{pathname:"/update/customers" , param:customer.id}}>
                            Edit
                            </Link>
                            <Button color="danger" onClick={()=>{
                                deleteCustomer(customer.id)
                            }}>
                            Delete
                            </Button> 

                        </Container>
                        </CardBody>
                        </Card>
    )
}
export default Customer
