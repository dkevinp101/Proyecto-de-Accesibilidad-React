

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      backgroundColor: "#064499",
      color: "#ffffff",
      padding: "2rem",
      textAlign: "center",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    contactInfo: {
      listStyle: "none",
      padding: 0,
    },
  };

  return (
    <footer style={styles.footer}>
      <h2 style={styles.title}>Contáctanos</h2>
      <ul style={styles.contactInfo}>
        <li>WhatsApp: 3204511250</li>
        <li>Teléfono Móvil: 3154521021</li>
        <li>Teléfono Fijo: 018000000140</li>
      </ul>
      <p>&copy; {currentYear} Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
