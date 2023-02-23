
export default function RetailShops() {
  return (
      <div className='main__content' id='delivery'>
        <section className="content__wrapper gap1rem">
          <div className="content__text-column50" id='litval-2'>
            <img src='./img/wine_market_litovskiy_val_2.jpg' 
                 alt='Магазин Wine Market, г. Калининград, ул. Литовский вал, 2'
                 className="content__image" />
                 <br />
            <h4>
              <a href="https://yandex.ru/maps/-/CCU5iTRnpA"
                 title="Wine Market, ул. Литовский вал, 2. Смотреть на карте"
                 className='text-blue'>
                 Ул. Литовский вал, 2
              </a>
            </h4>
          </div>
          <div className="content__text-column50" id='mira-23'>
            <img src="./img/wine_market_mira_23.jpg" 
                 alt="Магазин Wine Market, г. Калининград, Проспект Мира, 23–27" 
                 className="content__image" />
            <br />
            <h4>
              <a href="https://yandex.ru/maps/-/CCU5iTR0~D" 
                 title="Wine Market, пр. Мира, 23–27. Смотреть на карте"
                 className='text-blue'>
                Проспект Мира, 23–27
              </a>
            </h4>
          </div>
          <div className="" id='leonova-55'>
            <img src="./img/butyl_leonova55.jpg" 
                 alt="Магазин Бутыль, г. Калининград, ул. Леонова, 55" 
                 className="content__image" />
            <br />
            <h4>
              <a href="https://yandex.ru/maps/-/CCU5iTVICD" 
                 title="Магазин Бутыль, ул. Леонова, 55. Смотреть на карте"
                 className='text-blue'>
                Ул. Леонова, 55
              </a>
            </h4>
          </div>
        </section>
      </div>
  );
}