import {Card, CardBody, CardTitle,Input,Container,Button} from 'reactstrap' 
const UpdateCustomers=()=>{
    return(
        <Card body inverse color="primary">
        <CardBody>
            <form onSubmit="#">
                <CardTitle className="display-2">
                    Update Customer
                    </CardTitle>
                    <Input placeholder="Enter the name" onChange="#"/>
                    <br/>
                    <Input placeholder="Enter the phoneno here" onChange="#"/>
                    <br/>
                    <Input placeholder="Enter the emailid here" onChange="#"/>
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