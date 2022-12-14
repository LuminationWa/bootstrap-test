import { Form } from "react-bootstrap";

const Footer = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Example@email.com"
        ></Form.Control>
        <Form.Text className="text-muted">
          We'll never share your email address, trust us!
        </Form.Text>
      </Form.Group>
    </Form>
  );
};
export default Footer;
