

function Header() {
  return (
    <header style={{ backgroundColor: 'var(--color-primary)', padding: '10px' }}>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', gap: '20px' }}>
          <li>
            <a href="#titulo" style={navLinkStyles}>Home</a>
          </li>
          <li>
            <a href="#informacion" style={navLinkStyles}>Información</a>
          </li>
          <li>
            <a href="#sedes" style={navLinkStyles}>Sedes</a>
          </li>
          <li>
            <a href="#planes" style={navLinkStyles}>Planes</a>
          </li>
          <li>
            <a href="#registrarse" style={{ ...navLinkStyles, backgroundColor: 'var(--color-secondary-dark)', padding: '5px 10px', borderRadius: '5px' }}>Registrarse</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const navLinkStyles = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
};

export default Header;
