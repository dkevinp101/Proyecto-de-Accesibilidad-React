import React, { useState } from 'react';

const Registrarse = () => {
  const [formData, setFormData] = useState({ name: '', cedula: '', email: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por registrarte!");
    setFormData({ name: '', cedula: '', email: '' });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2 style={{ color: 'var(--color-primary)' }}>Formulario de Registro</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre completo"
          required
          style={{ display: 'block', margin: '10px auto', padding: '10px', width: '100%' }}
        />
        <input
          type="number"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
          placeholder="Cédula"
          required
          style={{ display: 'block', margin: '10px auto', padding: '10px', width: '100%' }}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
          style={{ display: 'block', margin: '10px auto', padding: '10px', width: '100%' }}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registrarse;
