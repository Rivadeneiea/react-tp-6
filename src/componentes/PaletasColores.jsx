import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const PaletasColores = () => {
  const [color, setColor] = useState("");
  const [colorLista, setColorLista] = useState([]);
  useEffect(() => {
    const guardarColor = JSON.parse(localStorage.getItem("color"));
    if (guardarColor) {
      setColor(guardarColor);
    }
  }, []);
  const handleChange = (event) => {
    setColor(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const cambioColorLista = [...colorLista, color];
    setColorLista(cambioColorLista);
    localStorage.setItem("colorLista", JSON.stringify(cambioColorLista));
    setColor("");
    alert("color guardado");
  };
  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ingrese un color</Form.Label>
          <Form.Control
            type="text"
            placeholder="color"
            value={color}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h2>color guardados</h2>

      <ul>
        {colorLista.map((color, index) => (
          <li key={index} style={{ backgroundColor: color }}>
            {color}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PaletasColores;
