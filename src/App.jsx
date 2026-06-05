import "./App.css";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="cards" id="motos">
        <Card
          titulo="Moto deportiva 125cc"
          texto="Ideal para principiantes. Tiene bajo consumo de combustible, es ligera y fácil de manejar en ciudad. Es una buena opción para aprender conducción deportiva con seguridad."
        />

        <Card
          titulo="Moto deportiva 300cc"
          texto="Ofrece mayor potencia y mejor respuesta que una 125cc. Es recomendable para usuarios con experiencia básica que buscan más velocidad, estabilidad y rendimiento en carretera."
        />

        <Card
          titulo="Moto deportiva 600cc"
          texto="Es una motocicleta de alto rendimiento. Tiene gran aceleración, frenos más potentes y mejor tecnología. Está dirigida a conductores con experiencia y buen control."
        />
        <Card
          titulo="Moto deportiva 1000cc"
          texto="Es una motocicleta de alto rendimiento. Tiene gran aceleración, frenos más potentes y mejor tecnología. Está dirigida a conductores con experiencia y buen control."
        />
       
      </section>

      <Footer />
    </>
  );
}

export default App;
