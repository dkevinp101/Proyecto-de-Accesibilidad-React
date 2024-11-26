import React, { useState, useRef } from 'react';

const Registrarse = () => {
  const [mensaje, setMensaje] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    cedula: "",
    email: ""
  });
  const [errorField, setErrorField] = useState(null);

  const alertRef = useRef(null);
  const firstInputRef = useRef(null);
  const inputRefs = {
    name: useRef(null),
    cedula: useRef(null),
    email: useRef(null)
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    for (let field in formData) {
      if (!formData[field].trim()) {
        setErrorField(field);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      inputRefs[errorField].current.focus();
      return;
    }

    setMensaje("¡Gracias! Te contactaremos pronto");
    alertRef.current.focus();

    setTimeout(() => {
      setMensaje("");
      setFormData({
        name: "",
        cedula: "",
        email: ""
      });
      firstInputRef.current.focus();
    }, 3000);
  };

  const inputFields = [
    {
      id: "name",
      label: "Nombre completo",
      type: "text",
      placeholder: "Ej: Juan Pérez"
    },
    {
      id: "cedula",
      label: "Cédula",
      type: "number",
      placeholder: "Ej: 123456789"
    },
    {
      id: "email",
      label: "Correo electrónico",
      type: "email",
      placeholder: "Ej: juan@ejemplo.com"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <center>
        <div className="max-w-xs mx-auto">
          <form 
            onSubmit={handleSubmit} 
            className="bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              Formulario de Registro
            </h2>

            {inputFields.map((field, index) => (
              <div key={field.id} className="mb-2">
                <label 
                  htmlFor={field.id}
                  className="block text-gray-300 font-medium mb-1"
                >
                  {field.label}:
                </label>
                <input
                  ref={index === 0 ? firstInputRef : inputRefs[field.id]}
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className={`w-48 px-2 py-1 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-700 text-white ${
                    errorField === field.id ? "border-red-500" : ""
                  }`}
                  aria-required="true"
                  min={field.type === "number" ? "0" : undefined}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-1.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              aria-label="Enviar formulario de contacto"
            >
              Registrarse
            </button>

            {mensaje && (
              <div 
                ref={alertRef}
                role="alert" 
                aria-live="assertive"
                tabIndex={-1}
                className="mt-4 p-3 bg-green-700 text-white rounded-lg text-center font-medium animate-fade-in"
              >
                {mensaje}
              </div>
            )}
          </form>
        </div>
      </center>
    </div>
  );
};

export default Registrarse;
