import './Form.css'
import { useState } from 'react';
export default function Form ( { object } ) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'nombre':
        setNombre(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'telefono':
        setTelefono(value);
        break;
      case 'asunto':
        setAsunto(value);
        break;
      case 'mensaje':
        setMensaje(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí podrías realizar acciones adicionales, como enviar datos a un servidor.
    console.log('Datos del formulario:', { nombre, email, telefono, asunto, mensaje });

    // Limpiar los campos después del envío
    setNombre('');
    setEmail('');
    setTelefono('');
    setAsunto('');
    setMensaje('');
  };

  return(
    <section className='form' style={{backgroundImage:`url(${object.url})`}}>
      <div>
        <p>{object.question}</p>
        <p>{object.text}</p>
      </div>
      <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="nombre" value={nombre} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleInputChange} />
      </label>
      <label>
        Teléfono:
        <input type="tel" name="telefono" value={telefono} onChange={handleInputChange} />
      </label>
      <label>
        Asunto:
        <input type="text" name="asunto" value={asunto} onChange={handleInputChange} />
      </label>
      <label>
        Mensaje:
        <textarea name="mensaje" value={mensaje} onChange={handleInputChange} />
      </label>
      <div>
      Declaro que he leído la Política de Tratamiento de Datos
      <button>Enviar</button>
      </div>

    </form>

    </section>
  )
}