import {Row,Col,Button,Container} from "react-bootstrap"
import {useState} from "react"
import './App.css';

function App() {
  const [cont,setCont] = useState(0)
  const contar =(operacion)=>{
    if (operacion ==="+") {

      setCont(cont+1)
    } else if(operacion ==="-") {

      setCont(cont-1)
    }
  }
  return (
    <div className="App">
        <h1>Contador</h1>
        <h3>Contador:{cont}</h3>
        <Container>
        <Row>
          <Col>
          <div className="d-grid gap-2 ">
          <Button onClick={()=>contar("+") } className="bg-success" size="lg">Sumar</Button>            
          </div>

          </Col>
          <Col>
          <div className="d-grid gap-2 ">
          <Button onClick={()=>contar("-")} className="bg-danger" size="lg">Restart</Button>
          </div>
          </Col>
        </Row>          
        </Container>


    </div>
  );
}

export default App;
