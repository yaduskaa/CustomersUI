import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom'
import {Card, CardBody, CardTitle, Container,Row,Col} from 'reactstrap'
import {ToastContainer} from 'react-toastify'
import Menu from './components/Menu'
import AllCustomers from './components/AllCustomers'
import CreateCustomers from './components/CreateCustomers'
import UpdateCustomers from './components/UpdateCustomers'

function App() {
  return (
    <div className="App">
      <Card body inverse style={{backgroundColor:"bg-primary"}}></Card>
      <ToastContainer/>
        <Router>
          <CardTitle className="display-2"> Customer Details </CardTitle>
          <Container>
            <Row>
              <Col>
              <Menu/>
              </Col>
              </Row>
              <Row>
                </Row>
              <Row>
                <Col>
                <Router>
                <Route Path="/" component={AllCustomers} exact ></Route>
                <Route Path ="/customers"  component={CreateCustomers} exact ></Route>
                <Route Path ="/update/customers"  component={UpdateCustomers} exact ></Route>
                </Router>
                </Col>
                </Row>
                </Container>
      </Router>
    </div>
  );
}

export default App;
