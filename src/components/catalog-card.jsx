

export default function Card({data}) {
  return (
    <div className="catalog__card" key={data.id} id={data.id}>
      <p className='text-center'>
          <img src={'./img/' + data.image} alt={data.name}
            className="img-common"/>
        </p>
        <p className='text-center'>
          {data.name}
        </p>
        <p className='text-center text-price'>
          {data.price} &#8381;
        </p>
        <p className='text-center'>
          <button className='btn btn--big' value={data.name}>Заказать в один клик</button>
        </p>
    </div>
  );
}