import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route}  from 'react-router-dom'
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
                <Col>
                <Route Path="/" component={AllCustomers} />
                </Col>
                </Row>
                </Container>
      </Router>
    </div>
  );
}

export default App;
