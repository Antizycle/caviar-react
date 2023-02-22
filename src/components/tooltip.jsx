
import { useState } from 'react';
import { usePopper } from 'react-popper';
import info from '../data/info.json';
import useClickOutside from './useclickoutside.jsx'

export default function Tooltip({id, name, type, children}) {
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'offset', options: { offset: [0, 10] }, }, ],
    placement: 'top',
  });

  let domNode = useClickOutside(() => {setTooltipIsVisible(false);});

  let tooltipInfo = info[type];

  return (
    <div ref={domNode}>
      <p className='text-center relative'>
        <button className='btn btn-link' value={id} type="button" ref={setReferenceElement}
            id={'tooltipBtn-' + id} 
            onClick={() => setTooltipIsVisible(!tooltipIsVisible)}>
            {children}
        </button>
      </p>  

      <div className={'tooltip ' + (tooltipIsVisible ? 'tooltip-show' : '')} 
      ref={setPopperElement} style={styles.popper} {...attributes.popper}
      id={'tooltip-' + id}>
        <div className='popper-header'>{name}</div>
        <div className='tooltip-body'>
          <strong>Вид:</strong> {tooltipInfo.type}<br />
          {tooltipInfo.age && <><strong>Возраст икорного стада:</strong> {tooltipInfo.age} <br /></>}
          {tooltipInfo.size && <><strong>Размер икринок:</strong> {tooltipInfo.size}<br /></>}
          {tooltipInfo.salt && <><strong>Содержание соли:</strong> {tooltipInfo.salt}<br /></>}
          {tooltipInfo.nutrition && <><strong>Пищевая ценность (в&nbsp;100&nbsp;г):</strong> {tooltipInfo.nutrition}<br /></>}
          {tooltipInfo.energy && <><strong>Энергетическая ценность (в&nbsp;100 г):</strong> {tooltipInfo.energy}<br /></>}
          {tooltipInfo.storage && <><strong>Условия хранения:</strong> {tooltipInfo.storage}<br /></>}
          {tooltipInfo.gost && <><strong>Соответствует ГОСТ:</strong> {tooltipInfo.gost}<br /></>}
          {tooltipInfo.manufacturer && <><strong>Производитель:</strong> {tooltipInfo.manufacturer}</>}
        </div>
      </div>
    </div>
  );
};