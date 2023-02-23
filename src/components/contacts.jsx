export default function Contacts() {
  return (
    <div className='main__content' id='delivery'>
      <section className="content__wrapper">

        <p><script 
            async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A21101178b6bb54219117e016b1ad8aa8628fdb08b97833ebeb244647ac7b0565&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true">
        </script></p>
        <h4>Официальный представитель в Калининградской области — ООО&nbsp;«Жемчужина»</h4>
        <h5>г. Калининград, ул. Камская 38.</h5>
        <h5>
          Телефон: 
          <a className="btn btn-big"href="tel:+74012336699" title="Позвоните нам">
            <img src='./img/phone.svg' className='nav__icon nav__icon--big' /> +7 (4012) 33-66-99
          </a>
          <a className="btn btn-big btn-green" href="whatsapp://send?phone=79114974228">
            <img src='./img/whatsapp.svg' className='nav__icon nav__icon--big' /> Whatsapp
          </a>
          <a className="btn btn-big btn-blue" href="viber://chat?number=%2B79114974228">
            <img src='./img/viber.svg' className='nav__icon nav__icon--big test' /> Viber
          </a>
        </h5>

      </section>
    </div>
  );
}