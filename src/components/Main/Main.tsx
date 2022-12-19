import { Button, Input, Radio, RadioChangeEvent, Space, Switch, TimePicker } from 'antd';
import './Main.scss';
import { DatePicker } from '../DatePicker';
import { useState } from 'react';

export const Main: React.FC = () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="main">
      <div className="main__wrapper">
        <h1 className='main__title'>Создание мероприятия</h1>

        <div className="main__sidesWrapper">
          <div className="main__left-side-wrapper">
            <h2 className='main__inputTitle'>Название мероприятия</h2>
            <Input
              placeholder='Введите название'
              size='large'
              className='mainInput'
            />

            <h2 className='main__inputTitle'>Имя ведущего</h2>
            <Input
              placeholder='Введите имя'
              size='large'
              className='mainInput'
            />

            <h2 className='main__inputTitle'>Дата и время начала</h2>
            <div className="main__dataWrapper">
              <DatePicker className='main__dataWrapper-dataPicker' />
              <TimePicker className='main__dataWrapper-timePicker' />
            </div>

            <h2 className='main__inputTitle'>Ссылка на YouTube трансляцию</h2>
            <Input
              placeholder='Вставьте ссылку'
              size='large'
              className='mainInput'
            />

            <h2 className='main__inputTitle'>Ссылка на заглушку</h2>
            <Input
              placeholder='Вставьте ссылку'
              size='large'
              className='mainInput'
            />

            <h2 className='main__inputTitle'>Внешняя кнопка (ссылка)</h2>
            <Input
              placeholder='Вставьте ссылку'
              size='large'
              className='mainInput'
            />
          </div>

          <div className="main__right-side-wrapper">
            <h2 className='main__radioTitle'>Доступ к мероприятию:</h2>
            <section className='main__radioSection'>
              <input
                type="radio"
                name="styles"
                id="first"
                className='main__radioInput'
              />
              <label htmlFor="first">По паролям</label>
            </section>

            <section className='main__radioSection'>
              <input
                type="radio"
                name="styles"
                id="second"
                className='main__radioInput'
              />
              <label htmlFor="second">Открытый</label>
            </section>

            <div className="main__switchWrapper">
              <h2 className='main__switchTitle'>Чат при запуске мероприятия</h2>
              <Switch className='main__switcher' defaultChecked onChange={onChange} />
            </div>

            <hr className='main__divider' />

            <div className="main__switchWrapper">
              <h2 className='main__switchTitle'>Кликабельные ссылки от пользователей в чате</h2>
              <Switch className='main__switcher' onChange={onChange} />
            </div>

            <hr className='main__divider' />

            <div className="main__switchWrapper">
              <h2 className='main__switchTitle'>Корзина</h2>
              <Switch className='main__switcher' defaultChecked onChange={onChange} />
            </div>

            <hr className='main__divider' />

            <h2 className='main__buttonTitle'>Презентация:</h2>
            <Button className='main__downloadButton'>
              Загрузить PDF
            </Button>

            <h2 className='main__checkTitle'>Дополнительные обязательные поля при входе:</h2>
            <section className='main__checkSection'>
              <input type="checkbox" className='main__checkInput' id='1' />
              <label htmlFor="1" className='main__checkLabel'>Фамилия</label>
            </section>

            <section className='main__checkSection'>
              <input type="checkbox" className='main__checkInput' id='2' />
              <label htmlFor="2" className='main__checkLabel'>Город</label>
            </section>

            <section className='main__checkSection'>
              <input type="checkbox" className='main__checkInput' id='3' />
              <label htmlFor="3" className='main__checkLabel'>Email</label>
            </section>
          </div>
        </div>
      </div>
      <Button className='main__saveButton'>
        Сохранить
      </Button>
    </div>
  )
}