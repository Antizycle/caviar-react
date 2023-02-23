import logo from '../img/logo.png';
import whatsapp from '../img/whatsapp.svg';
import viber from '../img/viber.svg';
import phone from '../img/phone.svg';

import toggleMenu from './toggleMenu.ts';

export default function Header() {
    return (
      <>
        <div className='menu-closer' id='menuCloser' onClick={toggleMenu} />
        <nav className='header'>
            <div className='nav__toggler' alt='Меню' onClick={toggleMenu}></div>
            <img src={logo} className='nav__logo' alt='Волгореченское рыбное хозяйство' />
            <div  className='nav__links' id='menuToggler'>
              <div className='nav__link nav__link--highlight'>
                  <a href='#catalog'>Каталог</a>
              </div>
              <div className='nav__link nav__link--highlight'>
                  <a href='#delivery'>Доставка</a>
              </div>
              <div className='nav__link nav__link--highlight'>
                  <a href='#varieties'>Сорта</a>
              </div>
              <div className='nav__link nav__link--highlight'>
                  <a href='#contacts'>Контакты</a>
              </div>
              <div className='nav__link nav__link--highlight'>
                  <a href="whatsapp://send?phone=79114974228">
                      <img src={whatsapp} className='nav__icon' alt="Позвонить в What's App" />
                  </a>
              </div>
              <div className='nav__link nav__link--highlight'>
                  <a href="viber://chat?number=%2B79114974228">
                      <img src={viber} className='nav__icon' alt='Позвонить в Viber' />
                  </a>
              </div>
              <div className='nav__link' alt='Позвонить нам'>
                <a href='tel:+74012336699' className='btn'>
                    <img src={phone} className='nav__icon nav__icon--big' />
                    +7 (4012) 33-66-99
                </a>
              </div>
            </div>
        </nav>
        </>
    );
}