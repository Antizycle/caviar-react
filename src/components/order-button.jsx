import { useState, useRef } from 'react';
import { usePopper } from 'react-popper';
import useClickOutside from './useclickoutside.jsx'
import ContactButton from './contactButton.jsx';
import emailjs from '@emailjs/browser';

export default function Button({id, name, price, children}) {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'offset', options: { offset: [0, 10] }, }, ],
    placement: 'bottom-end',
  });
  const [formInputs, setFormInputs] = useState({name: '', phone: ''});
  const [formValidateMsg, setFormValidateMsg] = useState({name: '', phone: ''});
  const [formOk, setFormOk] = useState(false);
  const [orderStatusMsg, setOrderStatusMsg] = useState(<span>Перезвоним в течение 15-ти минут!</span>);

  const domNode = useClickOutside(() => {setPopupIsVisible(false);});

  function preValidate(inputString, inputField) {
    let msg = 'Только русские и английские буквы';
    let testStr = /^[а-яёa-z- ]*$/iu;

    if(inputField === 'phone') {
      msg = 'Некорректный номер телефона';
      testStr = /^(\+)?([- ()]?\d[- ()]?){5,14}?$/;
    }

    if(!testStr.test(inputString)) {
      setFormValidateMsg({...formValidateMsg, [inputField]: msg});
      setFormOk(false);
    }
    else {
      setFormValidateMsg({...formValidateMsg, [inputField]: ''});
    }
    if (!formValidateMsg.name &&
        !formValidateMsg.phone &&
        formInputs.name &&
        formInputs.phone) setFormOk(true);
    setFormInputs({...formInputs, [inputField]: inputString})
  }

  function sendEmail(orderData) {
    const orderString = 'Наименование: ' + orderData.orderName.value + '. Цена: ' + orderData.orderPrice.value;

    const mailData = {
      clientName: orderData.name.value,
      clientPhone: orderData.phone.value,
      order: orderString,
    };

    emailjs.send('service_u4ih02i', 'template_m8vlu78', mailData, 'AZk3EWlBvAK55cKqy')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setOrderStatusMsg(
        <span><b>{mailData.clientName}</b>, ваш заказ: <br />
          <b>{orderData.orderName.value}</b> <br /> Стоимость: <b>{orderData.orderPrice.value} ₽</b> <br />
          успешно принят! <br />
          Ожидайте звонка менеджера в течение 15-ти минут для подтверждения!
          Уточнить информацию о заказе можно по телефону:<br />
          <ContactButton type='phone' /><br />
          Или в мессенджерах:<br />
          <ContactButton type='whatsapp' />
          <ContactButton type='viber' />
        </span>);
        setFormOk(false);
        setFormInputs({name: '', phone: ''});
        setFormValidateMsg({name: '', phone: ''});
    }, (error) => {
       console.log('FAILED...', error);
       setOrderStatusMsg(
        <span>
          <span className='text-red'>Не удалось отправить заказ!</span><br />
          Попробуйте позже или закажите по телефону:<br />
          <ContactButton type='phone' />
        </span>
      );
    });
  }

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
          <form onSubmit={(event) => {
                  event.preventDefault();
                  sendEmail(event.target);
          }}>
            <input type='hidden' className='form-control' name='orderName' value={name} />
            <input type='hidden' className='form-control' name='orderPrice' value={price} />
        	  <div className='form-group'>
        	      <input type='text' 
                       className={'form-control' + (formValidateMsg.name && ' --error')}
                       name='name' 
                       value={formInputs.name}
                       aria-describedby='emailHelp' 
                       placeholder='Введите ваше имя'
                       requried='true'
                       onChange={(e) => {
                        preValidate(e.target.value, e.target.name);
                       }}
                       />
                {formValidateMsg.name ? <span className='text-red'>{formValidateMsg.name}</span> : ''}
        	   </div>
        	   <div className='form-group'>
        	      <input type='tel' 
                       className={'form-control' + (formValidateMsg.phone && ' --error')}
                       name='phone' 
                       value={formInputs.phone}
                       placeholder='Введите ваш телефон'
                       title="от 6 до 14 цифры. Домашний либо мобильный начиная с +7 или 8"
                       requried='true' 
                       onChange={(e) => {
                        preValidate(e.target.value, e.target.name);
                       }}
                       />
                {formValidateMsg.phone ? 
                    <span className='text-red'>
                    {formValidateMsg.phone}
                    </span> : ''}
        	   </div>
        	   <button type='submit' 
                     className='btn btn--big btn--blue'
                     disabled={!formOk}
                     >
              Заказать
            </button>
        	</form>
        	<p className='margin-half'>{orderStatusMsg}</p>
        </div>
      </div>
    </div>
  );
}