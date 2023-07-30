import './_navbar.scss';
import logo from '../../assets/ArtfulSpaces_logo.png';
import cabinet_btn from '../../assets/portrait.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='logo'>
                <img src={logo} alt="logo" />
            </Link>
            <div className='menu'>
                <NavLink className='menu_link' to='/'>Home</NavLink>
                <NavLink className='menu_link' to='order'>Order</NavLink>
                <NavLink className='menu_link' to='examples'>Work Examples</NavLink>
                <NavLink className='menu_link' to='contact'>Contact</NavLink>
            </div>
            <Link className='cabinet' to='cabinet'>
                <img src={cabinet_btn} alt="cabinet_btn" />
            </Link>
        </div>
    )
}

export default Navbar;