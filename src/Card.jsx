import React from "react";

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ name, color }) {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: color,
        color: '#fff',
        width: '200px',
        textAlign: 'center',
        borderRadius: '10px'
      }}
    >
      <h2>Hola, {name}!</h2>
      <p>Sabemos que tu color favorito es: {color}</p>
    </div>
  );
}

export default Card;