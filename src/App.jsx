import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nom from './Components/nom/Nom';
import Prix from './Components/prix/Prix';
import Discription from './Components/discription/Discription';
import Image from './Components/image/Image';
import { Card } from 'react-bootstrap';
import Affichage from './Components/affichage/Affichage';

function App() {


  return (
    <>
      {/* <Nom/>
      <Prix/>
      <Discription/>
      <Image/> */}
      <Card border="primary" style={{ width: '55rem' }}>
        <Card.Header><Nom/></Card.Header>
        <Card.Body>
          <Card.Title><Prix/></Card.Title>
          <Card.Text>
          <Discription/>
          <Image/>
          </Card.Text>
        </Card.Body>
       
      </Card>
     <div>
     <Affichage/>
     </div>
    </>
     

  )
}

export default App
