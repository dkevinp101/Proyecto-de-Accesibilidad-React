

const Informacion = () => {
  const styles = {
    container: {
      backgroundColor: 'var(--color-secondary-light)',
      border: `1px solid var(--color-secondary-dark)`,
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '800px',
      margin: '20px auto',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
    },
    title: {
      color: 'var(--color-primary)',
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    text: {
      color: 'var(--color-black)',
      fontSize: '1rem',
      lineHeight: '1.5',
      marginBottom: '20px',
    },
    highlight: {
      color: 'var(--color-primary)',
      fontWeight: 'bold',
    },
    badgeContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '25px',
    },
    badge: {
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-white)',
      padding: '10px 15px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      boxShadow: '0 7px 10px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s, background-color 0.3s',
    },
    badgeHover: {
      transform: 'scale(1.1)',
      backgroundColor: 'var(--color-secondary-dark)',
    },
  };

  const badges = [
    'Equipamiento Moderno',
    'Entrenadores Expertos',
    'Clases Grupales',
    'Ambiente Inspirador',
    'Evaluaciones de Progreso',
  ];

  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, styles.badgeHover);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, styles.badge);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>¿Por qué escoger este gimnasio?</h3>
      <p style={styles.text}>
        En <span style={styles.highlight}>Zona Fit</span>, encontrarás un espacio moderno
        diseñado para transformar tu bienestar. Con instalaciones de última generación y entrenadores
        calificados, te motivamos a dar lo mejor en cada sesión.
      </p>
      <p style={styles.text}>
        Creemos que el ejercicio es una inversión en salud y confianza. En{' '}
        <span style={styles.highlight}>Zona Fit</span>, te apoyamos a alcanzar tus metas con clases
        dinámicas, equipos avanzados, y un ambiente que inspira resultados. En donde contamos con: 
      </p>
      <div style={styles.badgeContainer}>
        {badges.map((badge, index) => (
          <span
            key={index}
            style={styles.badge}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Informacion;
