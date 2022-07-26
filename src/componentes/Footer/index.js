import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="socialMedia">
        <ul>
          <li>
            <img src="./assets/fb.png" alt="Logo Facebook" />
          </li>
          <li>
            <img src="./assets/tw.png" alt="Logo Twitter" />
          </li>
          <li>
            <img src="./assets/ig.png" alt="Logo Instagram" />
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src="./assets/logo.png" alt="Logo Organo" />
      </div>
      <div className="dev">
        <p>Desenvolvido por Joaosam</p>
      </div>
    </footer>
  )
}

export default Footer
