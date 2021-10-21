import {Card, CardBody, CardTitle,Input,Container,Button} from 'reactstrap'
const CreateCustomers=()=>{
    return(
        <Card body inverse color="primary">
            <CardBody>
                <form onSubmit="#">
                    <CardTitle className="display-2">
                        New Customer
                        </CardTitle>
                        <Input placeholder="Enter the name" onChange="#"/>
                        <br/>
                        <Input placeholder="Enter the phoneno here" onChange="#"/>
                        <br/>
                        <Input placeholder="Enter the emailid here" onChange="#"/>
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