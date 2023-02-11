import './navbar.css';
import logoWhite from '../../img/logoWhite.png';
import IconsMenu from './IconsMenu/IconsMenu';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
    return <header className='navBar'>
        <img src={logoWhite} alt="logo" className='logo'/>
        <IconsMenu />
        <CartWidget />
    </header>
};

export default NavBar;