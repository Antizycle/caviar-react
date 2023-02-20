
export default function MainHeader() {
  return (
      <div className='main__topper'>
        <img src='./img/caviar_bg.jpg' className='topper__bg-image' alt='Чёрная икра в Калининграде' />
        <div className='topper__content'>
          <h1 className='text-shadow'>НАТУРАЛЬНАЯ ЧЁРНАЯ ИКРА</h1>
          <h3 className='text-shadow'>Осетровая икра премиального качества от производителя в Калининграде</h3>
          <div className='btn btn--bigger box-shadow '>
            <a href='tel:+74012336699'>
              Сделать заказ
            </a>
          </div>
        </div>
      </div>
  );
}