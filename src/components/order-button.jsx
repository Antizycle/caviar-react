import { useState, useRef } from 'react';
import { usePopper } from 'react-popper';
import useClickOutside from './useclickoutside.jsx'
import ContactButton from './contactButton.jsx';
import axios from 'axios';

export default function Button({id, name, type, price, children}) {
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
  const [formHidden, setFormHidden] = useState(false);
  const [orderStatusMsg, setOrderStatusMsg] = useState(<span>Перезвоним в течение 15-ти минут!</span>);

  const domNode = useClickOutside(() => {
    setPopupIsVisible(false);
    setFormHidden(false);
    setOrderStatusMsg(<span>Перезвоним в течение 15-ти минут!</span>);
  });

  function preValidate(inputString, inputField) {
    let msg = 'Только русские и английские буквы';
    let testStr = /^[а-яёa-z- ]+$/iu;

    if (inputField === 'phone') {
      msg = 'Некорректный номер телефона';
      testStr = /^(\+)?([- ()]?\d[- ()]?){6,14}?$/;
    }

    if (!testStr.test(inputString)) {
      setFormValidateMsg({...formValidateMsg, [inputField]: msg});
      if (formValidateMsg.name) setFormOk(false);
      return false;
    }
    else {
      setFormValidateMsg({...formValidateMsg, [inputField]: ''});
      setFormOk(true);
      return true;      
    }
  }

  function validateForm(data) {
    const nameValid = preValidate(data.name.value, 'name');
    const phoneValid = preValidate(data.phone.value, 'phone');

    if (nameValid && phoneValid) {
      sendEmail(data);
    }
  }

  function sendEmail(orderData) {
    setOrderStatusMsg(<span>Обработка данных, пожалуйста подождите...</span>);

    axios({
      method: 'post',
      url: './src/mailer.php',
      headers: { 'content-type': 'application/json' },
      data: {
        clientName: orderData.name.value,
        clientPhone: orderData.phone.value,
        type: orderData.orderType.value,
        id: orderData.orderId.value,
      }
    })
    .then(response => {
      setFormHidden(true);

      setOrderStatusMsg(
        <span><b>{orderData.name.value}</b>, ваш заказ: <br />
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
    })
    .catch(error => {
      setFormHidden(false);
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
          <form className={formHidden ? 'hidden' : undefined}
                onSubmit={(event) => {
                  event.preventDefault();
                  validateForm(event.target);
          }}>
            <input type='hidden' className='form-control' name='orderId' value={id} />
            <input type='hidden' className='form-control' name='orderType' value={type} />
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
                        setFormInputs({...formInputs, name: e.target.value})
                       }}
                       />
                {formValidateMsg.name ? <span className='text-red'>{formValidateMsg.name}</span> : ''}
        	   </div>
        	   <div className='form-group'>
        	      <input type='tel' 
                       className={'form-control' + (formValidateMsg.phone && ' --error')}
                       name='phone' 
                       value={formInputs.phone}
                       maxLength='17'
                       placeholder='Введите ваш телефон'
                       title="от 6 до 14 цифры. Домашний либо мобильный начиная с +7 или 8"
                       requried='true' 
                       onChange={(e) => {
                        
                        setFormInputs({...formInputs, phone: e.target.value.replace(/[^\d_ +--()]/g, "")})
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