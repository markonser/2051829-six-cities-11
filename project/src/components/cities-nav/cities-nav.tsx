import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CityName, cityNames } from '../../const/const';
import { changeCity } from '../../store/reducer';

export default function CitiesNav(): JSX.Element {

  const dispatch = useDispatch();
  const [active, setActive] = useState('paris');
  const name = Object.values(cityNames).map((city) => city.name);
  // const name = Object.keys(cityNames).map((city) => cityNames[city].name);

  const changeCityHandler = (evt: React.MouseEvent<HTMLElement>, cityName:string) => {
    evt.preventDefault();
    dispatch(changeCity(cityName));
    setActive(cityName);
  };

  return (
    <>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <ul className='locations__list tabs__list' >
            {
              name.map((cityName) => {
                const isActive = (cityName === active);
                return (
                  <li className='locations__item' key={Math.random()} onClick={(evt) => changeCityHandler(evt, cityName)} >
                    <a
                      className={`
                    locations__item-link
                    tabs__item
                    ${isActive ? 'tabs__item--active' : ''}
                  `}
                      href={`#${cityName}`}
                    >
                      <span>{cityName.toUpperCase()}</span>
                    </a>
                  </li>
                );
              }
              )
            }
          </ul>
        </section>
      </div>
    </>
  );
}
