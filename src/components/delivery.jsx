import phone from '../img/phone.svg';

export default function Delivery() {
  return (
      <div className='main__content'>
        <section className="content__wrapper gap1rem">
          <section className='content__text-column30'>
          <img src="./img/delivery.jpg" 
               alt="Натуральная чёрная осетровая икра в Калининграде" 
               className='content__image'/>
          </section>
          <section className='content__text-column65 text-left'>
            <h1>Как сделать заказ</h1>
            <ul>
              <li className='delivery__list'>
                <div className='list-icon'><img src='./img/phone-2.svg' /></div>
                <span className='list-text'>
                  Оставьте свои контакты через форму быстрого заказа,
                  менеджер перезвонит вам в течение 15 минут.
                  Или свяжитесь с нами по телефону:
                  <div className='nav__link' alt='Позвонить нам'>
                    <a href='tel:+74012336699' className='btn'>
                        <img src={phone} className='nav__icon nav__icon--big' />
                        +7 (4012) 33-66-99
                    </a>
                  </div>
                </span>
              </li>
              <li className='delivery__list'>
                <span className='list-icon'><img src='./img/card.svg' /></span>

                  Менеджер уточнит количество, стоимость заказа,
                  адрес и время доставки.

              </li>
              <li className='delivery__list'>
                <span className='list-icon'><img src='./img/box.svg' /></span>

                  Курьер производит доставку заказа в холодильнике по городу
                  в течение двух часов, тем самым, икра поступает к вам свежей,
                  и самое главное – сохраняется настоящий вкус черной икры.

              </li>
              <li className='delivery__list'>
                <span className='list-icon'><img src='./img/giftbox.svg' /></span>

                  При заказе от 100 г доставка по городу бесплатно. Стоимость
                  и сроки доставки в область уточняйте у менеджера.

              </li>
            </ul>
          </section>
        </section>
      </div>
  );
}