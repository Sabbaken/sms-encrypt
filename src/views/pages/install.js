import React from 'react';

const Install = () => {
  return (
    <div className="card">
      <ul>
        <li>
          Android
          <ul className="list">
            <li>Перейдите в Google Chrome</li>
            <li>Нажать на 3 точки в правом верхнем углу</li>
            <li>Выбрать пункт Добавить на главный экран / Add to homescreen</li>
          </ul>
        </li>
        <li>
          IOS
          <ul className="list">
            <li>Перейдите в Safari</li>
            <li>Нажмите Поделиться</li>
            <li>Выберите пункт “На экран Домой”</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Install;
