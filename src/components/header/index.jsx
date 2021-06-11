import './styles.scss';
import { NavBar } from '../NavBar/index';
import { CartWidget } from '../CartWidget/index';

export const Header = () => {
    return (
        <header>
            <NavBar />
            <h1>ecolife</h1>
            <div className="flex-container">
                <div><i className="fas fa-search"></i></div>
                <div><i className="fas fa-user-circle"></i></div>
                <CartWidget />
            </div>
        </header>
    )
};