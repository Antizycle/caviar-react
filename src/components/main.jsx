import MainHeader from './mainHeader.jsx';
import SpecialOffer from './specialOffer.jsx';
import Catalog from './catalog.jsx';

export default function Main() {
  return (
    <main className='main'>
      <MainHeader />
      <hr />
      <SpecialOffer />
      <hr />
      <Catalog />
      <hr />
    </main>
  );
}