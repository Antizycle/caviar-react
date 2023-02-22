import MainHeader from './mainHeader.jsx';
import SpecialOffer from './specialOffer.jsx';
import Catalog from './catalog.jsx';
import GiftBoxes from './gift-boxes.jsx';

export default function Main() {
  return (
    <main className='main'>
      <MainHeader />
      <hr />
      <SpecialOffer />
      <hr />
      <Catalog />
      <hr />
      <GiftBoxes />
      <hr />
    </main>
  );
}