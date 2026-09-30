import logo from './img/Logo.svg';
import search from './img/Search.png';
import login from './img/log_in.png';


const Header = () => {
    return (
        <header className="container header_cont">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <nav>
                    <li>Продукция</li>
                    <li>Материалы</li>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <img src={search} alt="Search" />
                    <img src={login} alt="Login" />
                </nav>
            </div>
        </header>
    );
}

export default Header;
