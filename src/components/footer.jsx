import ContactButton from "./contactButton.jsx";
import { YMaps, Map, Placemark, TrafficControl, 
         RulerControl, GeolocationControl } from '@pbe/react-yandex-maps';

export default function Footer() {
  
  return (
    <footer className='main__content' id='contacts'>
        <section className="text-left">
          <YMaps className='map-widget' query={{ lang: 'ru_RU' }}>
            <Map defaultState={{ 
                  center: [54.671585, 20.465040],
                  zoom: 16,
                  controls: ["zoomControl"],
                 }}
                 className='map-widget'
                 modules={["control.ZoomControl"]}
                 >
              <TrafficControl options={{ float: "right" }} />
              <GeolocationControl options={{ float: "left" }} />
              <RulerControl options={{ float: "right" }} />
              <Placemark geometry={[54.671585, 20.465040]} title='title'/>
            </Map>
          </YMaps>
          <h3 className='text-center'>
            Официальный представитель в Калининградской области — ООО&nbsp;«Жемчужина»
          </h3>
          <h4 className='text-center'>
            г. Калининград, ул. Камская, 38.
          </h4>
          <h4 className='text-center'>
            <p className='margin-half'>
              <ContactButton type='phone' />
            </p>
            <p className='margin-half'>
              <ContactButton type='whatsapp' />
            </p>
            <p className='margin-half'>
              <ContactButton type='viber' />
            </p>
          </h4>
        </section>
    </footer>

);
}