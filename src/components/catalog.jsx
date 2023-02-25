import { useState, useRef } from 'react';
import Card from './catalog-card.jsx';
import data from '../data/catalog.json';

export default function Catalog() {
  const [catalogList, setCatalogList] = useState(data);
  const fullList = useRef(data);

  function sortCatalog(key) {
    let sortOrder = 1;
    if(key === 'priceDesc') {
      sortOrder = -1;
      key = 'price';
    }

    let nextCatalogList = catalogList.slice();
    let sortedFullList = fullList.current.slice();

    function sortList(array) {
      return array.sort((a, b) => {
        if (typeof a[key] === 'number') return (a[key] - b[key]) * sortOrder;
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
      });
    }

    setCatalogList(sortList(nextCatalogList));
    fullList.current = sortList(sortedFullList).slice();
  }


  function filterCatalog(checkboxes, reset) {
    let nextCatalogList = fullList.current.slice();
    let filters = {type: new Set(), weight: new Set()}

    if(!reset) {
      for (let i = 2; i <= 12; i++) {
        if (!checkboxes[i].checked) filters[checkboxes[i].name].add(checkboxes[i].value);
      }
    }

    if (filters.type.size > 0) {
      filters.type.forEach(filter => {
        nextCatalogList = nextCatalogList.filter(entry => {
          if (entry.type !== filter) return entry;
        });
      });
    }

    if (filters.weight.size > 0) {
      filters.weight.forEach(filter => {
        nextCatalogList = nextCatalogList.filter(entry => {
          filter = parseInt(filter);
          if (entry.weight !== filter) return entry;
        });
      });
    }

    setCatalogList(nextCatalogList);
  }


  return (
    <div className='main__content' id='catalog'>
      <h1>Каталог</h1>
      <section className='catalog-control'>
        <div className='control__filters'>
          <div><form onSubmit={(event) => {
                        event.preventDefault();
                        filterCatalog(event.target, false);
                     }}
                     onReset={(event) => {
                        filterCatalog(event.target, true);
                     }}
               >
            <div>
              Фильтры: 
                <input type="submit" name="filter" value="Применить" className='margin-l-1rem' />
                <input type="reset" name="reset" value="Сбросить" className='margin-l-1rem' />
            </div>
            <div className='type-checkboxes'>
              Тип:
              <span>
                <input type='checkbox' id='type-classic' name='type' value='classic' defaultChecked="checked" />
                <label htmlFor='type-classic'>Классическая</label>
              </span>         
              <span>
                <input type='checkbox' id='type-premium' name='type' value='premium' defaultChecked="checked" />
                <label htmlFor='type-premium'>Премиум</label>
              </span>            
              <span>
                <input type='checkbox' id='type-selected' name='type' value='selected' defaultChecked="checked" />
                <label htmlFor='type-selected'>Отборная</label>
              </span>             
              <span>
                <input type='checkbox' id='type-sterlet' name='type' value='sterlet' defaultChecked="checked" />
                <label htmlFor='type-sterlet'>Стерлядь</label>
              </span>
              <span>
                <input type='checkbox' id='type-sterlet-zab' name='type' value='sterlet-zab' defaultChecked="checked" />
                <label htmlFor='type-sterlet-zab'>Стерлядь забойная</label>
              </span>
              <span>
                <input type='checkbox' id='type-traditional' name='type' value='traditional' defaultChecked="checked" />
                <label htmlFor='type-traditional'>Традиционная</label>
              </span>
              <span>
                <input type='checkbox' id='type-pressed' name='type' value='pressed' defaultChecked="checked" />
                <label htmlFor='type-pressed'>Прессованная</label>
              </span>
            
            </div>
            <div  className='type-checkboxes'>
              Вес:
              <span>
                <input type='checkbox' name='weight' value='50' defaultChecked="checked" id="weight-50" />
                <label htmlFor="weight-50">50&nbsp;г</label>
              </span>
              <span>
                <input type='checkbox' name='weight' value='100' defaultChecked="checked" id="weight-100" />
                <label htmlFor="weight-100">100&nbsp;г</label>
              </span>
              <span>
                <input type='checkbox' name='weight' value='250' defaultChecked="checked" id="weight-250" />
                <label htmlFor="weight-250">250&nbsp;г</label>
              </span>
              <span>
                <input type='checkbox' name='weight' value='500' defaultChecked="checked" id="weight-500" />
                <label htmlFor="weight-500">500&nbsp;г</label>
              </span>
            </div></form>
          </div>
        </div>
        <div className='control__sorting'>
           <select name='sort' id='sorting-select' title='Сортировка'
                   onChange={(event) => {
                    sortCatalog(event.target.value);                    
                   }}>
            <option label='Цена по возврастанию' value='price' />
            <option label='Цена по убыванию' value='priceDesc' />
            <option label='Имя' value='name' />
            <option label='Тип' value='type' />
            <option label='Вес' value='weight' />
          </select>
        </div>
      </section>
      <section className="content__wrapper">
        {(catalogList.length > 0) ?
          (catalogList.map( (entry) => <Card data={entry} key={entry.id}/>)) :
          <div className='catalog__card'><h3>Ничего не выбрано</h3></div>
        }        
      </section>
    </div>
  );
}