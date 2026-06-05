import { useState } from "react";

function Hero() {
  const [mensaje, setMensaje] = useState(
    "Motocicletas deportivas para cada nivel"
  );

  const cambiarMensaje = () => {
    if (mensaje === "Motocicletas deportivas para cada nivel") {
      setMensaje("La velocidad también necesita control y responsabilidad");
    } else {
      setMensaje("Motocicletas deportivas para cada nivel");
    }
  };

  return (
    <section className="hero" id="inicio">
      <h1>{mensaje}</h1>
      <p>Landing page enfocada en motos deportivas de 125cc, 300cc y 600cc.</p>
      <button onClick={cambiarMensaje}>Cambiar mensaje</button>
    </section>
  );
}

export default Hero;