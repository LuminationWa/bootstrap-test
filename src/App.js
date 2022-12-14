import Nav from "./Components/Nav";
import Carousel from "./Components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
