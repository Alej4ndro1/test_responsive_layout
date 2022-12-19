import './Header.scss';
import burgerMenu from '../../icons/burger.svg';

export const Header: React.FC = () => {

  return (
    <>
      <div className="header">
        <img
          src={burgerMenu}
          alt=""
          className='header__burgerMenu'
        />

        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>Мероприятия</li>
            <li className='nav__item'>Товары</li>
            <li className='nav__item'>Клиенты</li>
          </ul>
        </nav>
      </div>
    </>
  )
}