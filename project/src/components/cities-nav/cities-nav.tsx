import { useDispatch } from 'react-redux';
import { CityName, cityNames } from '../../const/const';
import { changeCity } from '../../store/reducer';

export default function CitiesNav(): JSX.Element {

  const dispatch = useDispatch();

  const name = Object.keys(cityNames).map((city) => cityNames[city].name);

  const changeCityHandler = (evt: React.MouseEvent<HTMLElement>, cityName: CityName) => {
    dispatch(changeCity(cityName));
    evt.target.closest('div').classList.add('tabs__item--active');
  };
  return (
    <>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <ul className='locations__list tabs__list' >
            {
              name.map((city: CityName) => (
                <li className='locations__item' key={Math.random()} onClick={(evt) => changeCityHandler(evt, city)} >
                  <div className='locations__item-link tabs__item'>
                    <span>{city.toUpperCase()}</span>
                  </div>
                </li>
              )
              )
            }
          </ul>
        </section>
      </div>
    </>
  );
}
