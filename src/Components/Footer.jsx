import logo2 from './img/Logo2.svg';
import Frame1 from './img/Frame1.svg';
import Frame2 from './img/Frame2.svg';
import Frame3 from './img/Frame3.svg';
import Frame4 from './img/Frame4.svg';
import Social from '../ui/Social';

const Footer = () => {
    return (
        <div className="container footer-cont">
            <div className="foo1">
                <img className='logo2' src={logo2} alt="Логотип" />
                <div className="flex">
                    <Social img={Frame2} />
                    <Social img={Frame3} />
                    <Social img={Frame1} />
                    <Social img={Frame4} />
                </div>
            </div>
            <div className="foo2">
                <p>Simple ® 2021</p>
            </div>
        </div>
    );
}

export default Footer;
