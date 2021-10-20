import React, { Fragment, useState } from 'react';

const About = () => {
  const [my] = useState([
    {
      type: 'Личная информация',
      info: [
        { name: 'Дата рождения', value: '1 февраля 1996' },
        { name: 'Электронная почта', value: 'sanay_2009@mail.ru' },
        { name: 'Гражданство', value: 'Российская Федерация' },
        { name: 'Место проживания', value: 'г. Санкт-Петербург' },
        { name: 'Образование', value: 'Высшее (бакалавр)' },
      ],
    },
    {
      type: 'Опыт работы',
      info: [
        { name: 'Период работы', value: 'январь 2019 – июль 2021 (1,5 года)' },
        { name: 'Должность', value: 'Инженер-тестировщик' },
        { name: 'Организация', value: 'ООО НПП «СпецТек», г. Санкт-Петербург' },
        {
          name: 'Должностные обязанности',
          value: 'Ручное тестирование Desktop, API, мобильных приложений',
        },
      ],
    },
    {
      type: 'Образование',
      info: [
        {
          name: 'Учебное заведение',
          value:
            'Государственный университет аэрокосмического приборостроения, г. Санкт-Петербург',
        },
        { name: 'Год окончания', value: '2020 (1 год назад)' },
        {
          name: 'Факультет',
          value: 'Институт вычислительных систем и программирования',
        },
        {
          name: 'Специальность',
          value: 'Информатика и вычислительная техника',
        },
        { name: 'Форма обучения', value: 'Очная' },
      ],
    },
    {
      type: 'Дополнительная информация',
      info: [
        { name: 'Иностранные языки', value: 'Английский (базовый)' },
        {
          name: 'Компьютерные навыки',
          value: 'JavaScipt, HTML5, CSS3, MySQL, Vue.js, React',
        },
        { name: 'Наличие водительских прав (категории)', value: 'B, C' },
        { name: 'Служба в армии', value: '2015-2016' },
        {
          name: 'Личные качества',
          value:
            'Ответственность, Исполнительность, Серьезное отношение к работе, Коммуникабельность, Обучаемость, Усидчивость, Активность, Настойчивость',
        },
      ],
    },
  ]);
  const zalupa = my.map((m) => (
    <Fragment key={m.type}>
      <h4>
        <strong>{m.type}</strong>
      </h4>

      <div className="descrip">
        {m.info.map((inf) => (
          <p key={inf.name}>
            <span style={{ fontStyle: 'italic', textDecoration: 'underline' }}>
              {inf.name}:
            </span>{' '}
            &nbsp; {inf.value}{' '}
          </p>
        ))}
      </div>
    </Fragment>
  ));
  return (
    <Fragment>
      <h2>Обо мне</h2>
      <div className="card ">
        <div className="card-body">{zalupa}</div>
      </div>
    </Fragment>
  );
};

export default About;
