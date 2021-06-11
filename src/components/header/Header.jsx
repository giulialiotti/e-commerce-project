import './styles.scss';
import { NavBar } from '../navBar/NavBar';

export const Header = () => {
    return (
        <header>
            <NavBar />
            <h1>ECOLIFE</h1>
            <div className="flex-container">
                <div><i className="fas fa-search"></i></div>
                <div><i className="fas fa-user-circle"></i></div>
            </div>
        </header>
    )
};