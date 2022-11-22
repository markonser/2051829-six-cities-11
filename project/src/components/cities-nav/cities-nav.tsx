import { Link } from 'react-router-dom';
import { CitiesList } from '../../const/const';

export default function CitiesNav(navCitiesList: any) {
  const cities = Object.values(navCitiesList);

  return (
    <>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <ul className='locations__list tabs__list'>
            {/* {
              cities.map((city) => {
                <li className='locations__item'>
                  <div className='locations__item-link tabs__item tabs__item--active'>
                    <span>{ }</span>
                  </div>
                </li>
              })
            } */}
          </ul>
        </section>
      </div>
    </>
  );
}
