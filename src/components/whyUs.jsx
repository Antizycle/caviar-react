
export default function WhyUs() {
  return (
      <>
        <div className='main__content' id='delivery'>
          <section className="content__wrapper">
            <section className='content__text-column54  text-left'>
              <h1>
                Наша чёрная икра&nbsp;— один из самых востребованных деликатесов в мире
              </h1>
              <p className='text1'>
                Естественно, что при покупке чёрной икры, люди хотят быть уверены
                в том, что продукт настоящий. Приобретая чёрную икру Волгореченского
                рыбного хозяйства, вы получаете гарантию соответствия продукции
                мировым стандартам качества.
              </p>
            </section>
            <section className='content__text-column30'>
              <img src="./img/all_stacked.jpg" 
                alt="Натуральная чёрная осетровая икра в Калининграде" 
                className='content__image'/>
            </section>
          </section>
        </div>
        <hr />
        <div className='main__content' id='delivery'>
          <section className="content__wrapper gap1rem">
            <section className='content__text-column30'>
              <img src="./img/badges.png" 
                  alt="Натуральная чёрная осетровая икра в Калининграде" 
                  className='content__image'/>
            </section>
            <section className='content__text-column65  text-left'>
              <h1>Почему нужно покупать именно нашу чёрную икру?</h1>
              <ul className='margin-l-1rem'>
                <li>Наша икра абсолютно легальна и&nbsp;при производстве проходит
                    необходимые проверки на всех этапах изготовления</li>
                <li>Мы торгуем эксклюзивной икрой одного вида рыб сибирского осетра</li>
                <li>Наша продукция натуральная (не&nbsp;пастеризованная) 
                    и&nbsp;хранится в&nbsp;обычном холодильнике до 12&nbsp;месяцев</li>
                <li>Мы осуществляем доставку в&nbsp;холодильнике по&nbsp;городу 
                    в&nbsp;течение двух часов</li>
                <li>Сертификат и&nbsp;ветеринарное свидетельство, удостоверяющие 
                    качество прилагаются</li>
                <li>Присутствует гибкая система скидок</li>
              </ul>
            </section>
          </section>
        </div>
      </>
  );
}