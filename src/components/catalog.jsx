import Card from './catalog-card.jsx';
import data from '../data/catalog.json';

export default function Catalog() {
  return (
    <div className='main__content' id='catalog'>
    <h1>Каталог</h1>
      <section className="catalog__wrapper">
        {data.map( (entry) => <Card data={entry} key={entry.id}/>
        )}        
      </section>
    </div>
  );
}