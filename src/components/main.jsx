import MainHeader from './mainHeader.jsx';
import SpecialOffer from './specialOffer.jsx';
import Catalog from './catalog.jsx';
import GiftBoxes from './giftBoxes.jsx';
import Delivery from './delivery.jsx';
import RetailShops from './retailShops.jsx';
import Varieties from './varieties.jsx';
import WhyUs from './whyUs.jsx';
// import Contacts from './contacts.jsx';

export default function Main() {
  return (
    <main className='main'>
      <MainHeader />
      <SpecialOffer />
      <hr />
      <Catalog />
      <hr />
      <GiftBoxes />
      <hr />
      <Delivery />
      <RetailShops />
      <hr />
      <Varieties />
      <hr />
      <WhyUs />
      <hr />
    </main>
  );
}

// retail-shops (horizontal scroll?)	sorts	why-us	map-widget