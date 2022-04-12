import logo from '../assets/images/logo.svg'
import iconLupa from '../assets/images/icon-lupa.svg'
import iconCar from '../assets/images/icon-car.svg'


const Header = () => {
  return (
    <header className="container__header">
      <nav className="nav__bar">
        <div className="logo__name">
          <img src={logo} alt="Nombre Logo" />
          <h2>Foo</h2>
        </div>
        <ul className="nav__items">
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>Shop</li>
        </ul>
        <div className="search">
          <img className="icon__lupa" src={iconLupa} alt="Icono Lupa" />
          <input type="text" placeholder="Search" />
          <div className="search__car">
            <img src={ iconCar } alt="Icono Carrito" />
            <span>2</span>
          </div>
        </div>
      </nav>
      <div className="cuerpo__header"></div>
    </header>
  )
}

export default Header