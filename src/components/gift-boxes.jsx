
import giftData from '../data/gift-data.json';
import GiftCard from './gift-card.jsx';

export default function GiftBoxes() {
  return (
      <div className='main__content' id='gift-boxes'>
        <h1>Специальное предложение — чёрная икра Волгореченского рыбного хозяйства в подарочной упаковке для особых случаев</h1>
        <section className="content__wrapper">
          {giftData.map( (entry) => <GiftCard data={entry} key={entry.id} />
          )}        
        </section>
      </div>
  );
}