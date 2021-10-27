import Customer from './Customer'
import {Button, Card,CardBody,CardText,CardTitle,Container} from 'reactstrap'
import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import base_url from '../service/serviceapi'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import UpdateCustomers from './UpdateCustomers'
 const AllCustomers=()=>{
 const [customers,setCustomers]=useState([])
    useEffect(()=>{
    getAllCustomersFromServer()},[])
    //console.log(customers);

    const UpdateCustomers=(id)=>{
      setCustomers(customers.filter((customer)=>customer.id!==id))
    }
    const getAllCustomersFromServer=()=>{
       // let that=this
      axios.get(`${base_url}/get/customers`).then(
      (response)=>{ 
           setCustomers(response.data)
          //console.log(customers)
          //console.log(response)
        }
          //toast("All Customers are loaded")},
           
           )
        }
    
    
    return (
        
        <Card body inverse color="primary">
            <CardTitle className="display-3">
                All Customers
                </CardTitle>
               
                {
                    //customers=response.data
                    customers.length>0?
                    customers.map((customer)=>(
                        <Customer key={customer.id} customer={customer} update={UpdateCustomers}/>
                    ))
                       
                        
                  
                 //console.log(customers)
                   
    :
    "No Customers are available"
                     }
                     
            </Card>
    )
}
export default AllCustomers
