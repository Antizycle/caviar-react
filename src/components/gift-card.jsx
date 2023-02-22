import Button from './order-button.jsx';

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
        {data.variant_small.name}
      </p>
      <p className='text-center text-price'>
        {data.variant_small.price}&nbsp;&#8381;
      </p>
      <Button id={data.variant_small.id} name={data.variant_small.name}>
        Заказать в один клик
      </Button>
      <p className='text-center'>
        <img src={data.images.image_three} alt={data.images_alt}
          className="img-common"/>
      </p>
      <p className='text-center'>
        {data.variant_big.name}
      </p>
      <p className='text-center text-price'>
        {data.variant_big.price}&nbsp;&#8381;
      </p>
      <Button id={data.variant_big.id} name={data.variant_big.name}>
        Заказать в один клик
      </Button>
    </div>
  );
}