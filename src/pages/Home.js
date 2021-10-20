import React, { useState } from 'react';

const Home = () => {
  const [start] = useState({
    text: `Добрый день, Гость! Добро пожаловать на страницу начинающего fontend-разработчика. Ознакомься с навигацией на этой странице.`,
  });
  return (
    <div className="my_card">
      <div className="img_icon"></div>

      <div className="content">
        <h2>Назаров Сергей Сергеевич</h2>
        <p style={{ fontStyle: 'italic' }}>{start.text}</p>
      </div>
    </div>
  );
};

export default Home;
