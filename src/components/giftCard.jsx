import Button from './order-button.jsx';
import priceFormatter from '../scripts/priceFormatter.js'

export default function GiftCard({data}) {

  return (
    <div className="catalog__card" id={data.id}>
      <p className='text-center'>
        <img src={data.images.image_one} alt={data.images_alt}
          className="img-common"/>
      </p>
      <h3 className="text-center">{data.title}</h3>
      <p className='text-center'>{data.title_description}</p>
      <p className='text-center'>
        <img src={data.images.image_two} alt={data.images_alt}
          className="img-common"/>
      </p>
      <p className='text-center'>
        {data.description}
      </p>
      <p className='text-center'>
        {data.variantSmall.name}
      </p>
      <p className='text-center text-price'>
        {priceFormatter(data.variantSmall.price)}&nbsp;&#8381;
      </p>
      <Button id={data.variantSmall.id} name={data.variantSmall.name} type='giftbox' price={priceFormatter(data.variantSmall.price)}>
        Заказать в один клик
      </Button>
      <p className='text-center'>
        <img src={data.images.image_three} alt={data.images_alt}
          className="img-common"/>
      </p>
      <p className='text-center'>
        {data.variantBig.name}
      </p>
      <p className='text-center text-price'>
        {priceFormatter(data.variantBig.price)}&nbsp;&#8381;
      </p>
      <Button id={data.variantBig.id} name={data.variantBig.name} type='giftbox' price={priceFormatter(data.variantBig.price)}>
        Заказать в один клик
      </Button>
    </div>
  );
}