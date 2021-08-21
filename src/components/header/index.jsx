import { HiOutlineUser, HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import './styles.scss';
import { NavBar } from '../NavBar/index';
import { CartWidget } from '../CartWidget/index';

export const Header = () => {
    return (
        <header>
            <HiOutlineMenuAlt1 className="hamburger-menu"/>
            <NavBar />
            <h1>fresh</h1>
            <div className="flex-container">
                <AiOutlineSearch className="hide-mobile" />
                <HiOutlineUser className="hide-mobile" />
                <CartWidget />
            </div>
        </header>
    )
};