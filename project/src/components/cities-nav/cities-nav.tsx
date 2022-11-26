import { useDispatch } from 'react-redux';
import { CityName, cityNames } from '../../const/const';
import { changeCity } from '../../store/reducer';

export default function CitiesNav(): JSX.Element {

  const dispatch = useDispatch();

  const name = Object.keys(cityNames).map((city) => cityNames[city].name);

  const changeCityHandler = (cityName: CityName) => {
    dispatch(changeCity(cityName));
  };
  return (
    <>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <ul className='locations__list tabs__list' >
            {
              name.map((city) => (
                <li className='locations__item' key={Math.random()} onClick={() => changeCityHandler(city)} >
                  <div className='locations__item-link tabs__item tabs__item--active'>
                    <span>{city}</span>
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
