import MainHeader from './mainHeader.jsx';
import SpecialOffer from './specialOffer.jsx';
import Catalog from './catalog.jsx';
import GiftBoxes from './giftBoxes.jsx';
import Delivery from './delivery.jsx';
import RetailShops from './retailShops.jsx';
import Varieties from './varieties.jsx';
import WhyUs from './whyUs.jsx';
import Footer from './footer.jsx';
// import Contacts from './contacts.jsx';

export default function Main() {
  return (
    <main className='main'>
      <MainHeader />
      <hr />
      <SpecialOffer />
      <hr id='catalog' />
      <Catalog />
      <hr id='giftboxes' />
      <GiftBoxes />
      <hr id='delivery'/>
      <Delivery />
      <RetailShops />
      <hr id='varieties' />
      <Varieties />
      <hr id='whyus' />
      <WhyUs />
      <hr id='contacts'/>
      <Footer />
    </main>
  );
}