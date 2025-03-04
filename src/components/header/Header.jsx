import './Header.sass'
import logo from '../../assets/logo-eshop-big.png'
import tab from '../../assets/tab.jpg'

function Header() {
    return(
        <nav className='header flex justify-center'>
            <img src={logo} alt="" className='logo'/>
        </nav>
    )
}

export default Header