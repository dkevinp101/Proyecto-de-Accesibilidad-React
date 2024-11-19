
import sede1 from './assets/img/sede1.png';
import sede2 from './assets/img/sede2.png';
import sede3 from './assets/img/sede3.png';

function Sedes() {
  const sedes = [
    {
      img: sede1,
      title: "Sede 1",
      description:
        "Este gimnasio es ideal para quienes buscan una experiencia de entrenamiento sencilla y eficiente, enfocada en máquinas de alta calidad que aseguran una rutina de cardio y fuerza completa.",
    },
    {
      img: sede2,
      title: "Sede 2",
      description:
        "Diseñado para aquellos que buscan un entrenamiento versátil, este gimnasio ofrece tanto máquinas como pesas libres para quienes desean combinar el ejercicio funcional con el trabajo de fuerza.",
    },
    {
      img: sede3,
      title: "Sede 3",
      description:
        "Un gimnasio completo que no solo cubre el entrenamiento de fuerza y resistencia, sino que también ofrece una piscina para ejercicios de bajo impacto y recuperación muscular.",
    },
  ];

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      margin: '20px 0',
    },
    card: {
      backgroundColor: 'var(--color-secondary-light)',
      border: `1px solid var(--color-secondary-dark)`,
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      width: '300px',
      textAlign: 'center',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'var(--color-primary)',
      margin: '10px 0',
    },
    cardDescription: {
      padding: '10px',
      fontSize: '1rem',
      color: 'var(--color-black)',
      textAlign: 'justify',
    },
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
  };

  return (
    <div className="container">
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Nuestras Sedes</h2>
      <div style={styles.container}>
        {sedes.map((sede, index) => (
          <div
            key={index}
            className="card"
            style={styles.card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={sede.img} alt={`Imagen de ${sede.title}`} style={styles.cardImage} />
            <h3 style={styles.cardTitle}>{sede.title}</h3>
            <p style={styles.cardDescription}>{sede.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sedes;
