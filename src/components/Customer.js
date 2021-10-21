import React from 'react'
import {Button, Card,CardBody,CardText,CardTitle,Container} from 'reactstrap'
import {Link} from 'react-router-dom'
const Customer=({customer})=>{
    return(
        <Card body inverse color="primary">
            <CardBody>
                <CardTitle className="font-weight-bold">
                    {customer.name}
                    </CardTitle >
                    <CardText>{customer.emailid} </CardText>
                    <CardText>{customer.phoneno} </CardText>
                    <Container>
                        <Link className= "btn btn-primary" to="/updatecustomer">
                            Edit
                            </Link>
                            <Button>
                            Delete
                            </Button> 

                        </Container>
                        </CardBody>
                        </Card>
    )
}
export default Customer