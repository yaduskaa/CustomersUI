import React from 'react'
import {ListGroup,Group,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'
const Menu=()=>{
    return(
        <ListGroup>
            <Row>
                <Col>
                  <Link to="/" style={{backgroundColor:"gray",color:"white"}}>
                      Home
                      </Link>
                     
                </Col>
                <Col>
                <Link to="/createCustomer" style={{backgroundColor:"gray",color:"white"}}>
                          Add Customer
                          </Link>
                </Col>
                </Row>
            </ListGroup>
    )
}
export default Menu