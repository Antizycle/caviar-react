import Card from './catalog-card.jsx';
import data from '../data/catalog.json';

console.log(data);

export default function Catalog() {
  return (
    <div className='main__content'>
    <h1>Каталог</h1>
      <section className="catalog__wrapper">
        {data.map( (entry) => <Card data={entry} />
        )}        
      </section>
    </div>
  );
}