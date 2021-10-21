import Customer from './Customer'
import {Card,CardTitle,CardBody } from 'reactstrap'
import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import base_url from '../service/serviceapi'
import {toast} from 'react-toastify'
const AllCustomers=()=>{
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
    getAllCustomersFromServer()},[])

    const getAllCustomersFromServer=()=>{
       // let that=this
      axios.get(`${base_url}/`).then(
      (response)=>{
          setCustomers(response.data)
          console.log(customers)
          console.log(response.data)
        },
          //toast("All Customers are loaded")},
           
           )
        }
    
    
    return (
        
        <Card body inverse color="primary">
            <CardTitle className="display-2">
                All Customers
                </CardTitle>
               
                {
                    customers.length>0?
                       customers.map((customer) => {
                       <Customer key={customer.id} customer={customer}/>
                        
                   } )
                   
    :
    "No Customers are available"
                     }
                     
            </Card>
    )
}
export default AllCustomers