import Button from './order-button.jsx'

export default function SpecialOffer() {
  return (
      <div className='main__content' id='special-offer'>
        <section className='content__text-column5'>
          <h1>Ограниченное предложение</h1>
          <p className='text1'>
            В 2020 году Волгореченскому рыбному хозяйству исполнилось 45 лет. 
            Мы сохранили традиции советского рыбоводства и производим более 
            13 тонн осетровой икры в год. Чёрная икра — наша гордость!
          </p>
          <p className='text1'>
            В честь нашего 45 дня рождения мы выпустили новый продукт: забойную 
            осетровую икру, в лимитированной партии, всего 1975 банок. Отборная 
            забойная икра получена от лучших осетров возрастом старше 12 лет. 
            Каждая баночка с забойной икрой — особенная, пронумерована от 1 до 
            1975, что делает продукт совершенно штучным.
          </p>
          <p className='text1'>
            Дизайн-студия Art.Lebedev разработала принципиально новую, 
            современную этикетку. Двуязычная этикетка и знак «Сделано в России» 
            заботливо подскажут иностранным обладателям, откуда родом каждая баночка.
          </p>
          <p className='text-center'>
            <img src='./img/250_limited_2.jpg' alt='Икра забойная осетровая «Traditional» ж/б (250 г)' 
              className="content__image"/>
          </p>
          <p className='text-center'>
            Икра чёрная забойная осетровая «Traditional» ж/б (250 г)
          </p>
          <p className='text-center text-price text-red'>
            22 500 &#8381;
          </p>
            <Button id='limited_250' name='Икра чёрная забойная осетровая «Traditional» ж/б (250&nbsp;г)'>
               Заказать в один клик
            </Button>
        </section>
        <section className='content__text-column4'>
          <img src="./img/limited_still.jpg" alt="Икра забойная осетровая «Traditional»" className='content__image'/>
        </section>
      </div>
  );
}