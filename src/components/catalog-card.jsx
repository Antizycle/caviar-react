import Tooltip from './tooltip.jsx';
import Button from './order-button.jsx';

export default function Card({data}) {
  return (
    <div className="catalog__card" key={'entry' + data.id} id={data.id}>
      <p className='text-center'>
          <img src={'./img/' + data.image} alt={data.name}
            className="img-common"/>
        </p>
        <p className='text-center'>
          {data.name}
        </p>
        <p className='text-center text-price text-price--gray'>
          {data.price}&nbsp;&#8381;
        </p>
          <Tooltip id={data.id} name={data.name} type={data.type}>
            Подробнее
          </Tooltip>
          <Button id={data.id} name={data.name}>
            Заказать в один клик
          </Button>
    </div>
  );
}