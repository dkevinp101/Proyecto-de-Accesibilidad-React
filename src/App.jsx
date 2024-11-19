import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Titulo from "./Titulo.jsx";
import Sedes from "./Sedes.jsx";
import Informacion from "./Informacion.jsx";
import Planes from "./Planes.jsx";
import Registrarse from "./Registrarse.jsx";

function App() {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '20px' }}>
      <Header />
      <section id="titulo" className="container">
        <Titulo />
      </section>
      <section id="informacion" className="container">
        <Informacion />
      </section>
      <section id="sedes" className="container">
        <Sedes />
      </section>
      <section id="planes" className="container">
        <Planes />
      </section>
      <section id="registrarse" className="container">
        <Registrarse />
      </section>
      <Footer />
    </div>
  );
}

export default App;
