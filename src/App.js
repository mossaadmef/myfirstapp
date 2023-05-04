
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div classNameName="App">
      <p> welcome to react javascript </p>
      
      

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>enter your given and last name</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Date and place of birth</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group controlId="formFileDisabled" className="mb-3">
        <Form.Label>Occupation and place of work</Form.Label>
        <Form.Control type="file" disabled />
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Nationality</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>status of residence</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>

</div>
)
}

export default App;
