import { useState } from "react";

function Card({ titulo, texto }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="card">
      <h3>{titulo}</h3>

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Ver más"}
      </button>

      {mostrar && <p>{texto}</p>}
    </div>
  );
}

export default Card;
