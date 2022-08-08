import Logo from './../../../assets/images/Logo-transparente2.png'
import './header.css'

export const Header = () => {
  return (
    <header>
        <div className='header__bar1' />
        <div className='header__bar2Container'>
          <div className='header__bar2'>
            <h1>CM RECAPADOS</h1>
          </div>
          <img className='logo' src={Logo} alt="Logo CM Recapados" />
        </div>
    </header>
  )
}
