import { useState } from 'react';
import { usePopper } from 'react-popper';
import useClickOutside from './useclickoutside.jsx'

export default function Button({id, name, children}) {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'offset', options: { offset: [0, 10] }, }, ],
    placement: 'bottom-end',
  });

  const domNode = useClickOutside(() => {setPopupIsVisible(false);});

  return (
    <div ref={domNode}>
      <p className='text-center relative'>
        <button className='btn btn--big' value={id} type="button" ref={setReferenceElement}
          id={'buyBtn-' + id} 
          onClick={() => setPopupIsVisible(!popupIsVisible)}>
          {children}
        </button>
      </p>

      <div className={'popper box-shadow--light ' + (popupIsVisible ? 'popper-show' : '')} 
        ref={setPopperElement} style={styles.popper} {...attributes.popper}
        id={'buyPopper-' + id} >
        <div className='popper-header'>Ваш Заказ:</div>
        <div className='popper-body'>
          <strong>{name}</strong>
          <form action='' method='post'>
            <input type='hidden' className='form-control' name='order' value={id} />
        	  <div className='form-group'>
        	      <input type='text' className='form-control' name='name' aria-describedby='emailHelp' placeholder='Введите ваше имя' />
        	   </div>
        	   <div className='form-group'>
        	      <input type='tel' className='form-control' name='phone' placeholder='Введите ваш телефон' />
        	   </div>
        	   <button type='submit' className='btn btn--big btn--blue'>Заказать</button>
        	</form>
        	<p className='margin-half'>Перезвоним в течение 15-ти минут!</p>
        </div>
      </div>
    </div>
  );
};