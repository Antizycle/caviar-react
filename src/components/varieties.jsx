
export default function Varieties() {
  return (
      <div className='main__content' id='varieties'>
        <h1>Сорта чёрной икры</h1>
        <section className="content__wrapper">
          <div className="catalog__card" id='variety-classic'>
            <p className='text-center'>
              <img src='./img/type_classic_500x292.jpg'
                  alt="Икра черная CLASSIC"
                  className="img-common" />
            </p>
            <h2>Икра чёрная CLASSIC</h2>
            <ul className='list--bullet-dot text-left'>
                <li>Высший сорт</li>
                <li>Соответствует <strong>ГОСТ&nbsp;55486-2013</strong></li>
                <li>Получена от гибридов русского, ленского осетра и&nbsp;бестера</li>
                <li>Возраст осетра <strong>6&ndash;8 лет</strong></li>
                <li>Размер икринок <strong>2&nbsp;мм</strong></li>
                <li>Икра проходит государственный и&nbsp;внутренний ветеринарный контроль</li>
            </ul>
          </div>
          <div className="catalog__card" id='variety-premium'>
            <p className='text-center'>
              <img src='./img/type_premium_500x292.jpg'
                  alt="Икра черная PREMIUM"
                  className="img-common" />
            </p>
            <h2>Икра чёрная PREMIUM</h2>
            <ul className='list--bullet-dot text-left'>
              <li>Высший сорт</li>
              <li>Соответствует <strong>ГОСТ&nbsp;7442-2002</strong></li>
              <li>Получена от сибирского осетра ленской популяции</li>
              <li>Возраст осетра менее <strong>14&nbsp;лет</strong></li>
              <li>Размер икринок <strong>2,5&ndash;3&nbsp;мм</strong></li>
              <li>Икра проходит государственный и&nbsp;внутренний ветеринарный контроль</li>
            </ul>
          </div>
          <div className="catalog__card" id='variety-selected'>
            <p className='text-center'>
              <img src='./img/type_selected_500x292.jpg'
                  alt="Икра черная SELECTED"
                  className="img-common" />
            </p>
            <h2>Икра чёрная SELECTED</h2>
            <ul className='list--bullet-dot text-left'>
              <li>Высший сорт</li>
            	<li>Соответствует <strong>ГОСТ&nbsp;7442-2002</strong></li>
            	<li>Получена от отборного стада <strong>«Selected»</strong></li>
            	<li>Самки «Selected» старше <strong>15&nbsp;лет</strong></li>
            	<li>Размер икринок более <strong>3,5&nbsp;мм</strong></li>
            	<li>Поставляется на экспорт и&nbsp;в&nbsp;РосРезерв</li>
            	<li>Икра проходит государственный и&nbsp;внутренний ветеринарный контроль</li>
            </ul>
            <p className='text-blue'>Выпускается в ограниченном количестве (7% от общего производства)</p>
          </div>
        </section>
      </div>
  );
}