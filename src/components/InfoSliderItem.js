import React from 'react';

const InfoSliderItem = ({ sliderInfo, setVisible }) => {
  return (
    <div className="info-modal">
      <div className="info-modal-header">
        <h3>
          Информация о проекте <strong>{sliderInfo.title}</strong>
        </h3>
        <img
          className="close-icon"
          onClick={() => setVisible(false)}
          src="https://img.icons8.com/windows/32/000000/close-window.png"
        />
      </div>

      <div className="info-modal-body">
        <div
          className="info-modal-picture"
          style={{ backgroundImage: `url(${sliderInfo.url})` }}
        ></div>
        <h4>Описание</h4>
        <p>{sliderInfo.description}</p>
        <div className="info-modal-link">
          <h4>Ссылка на репозиторий gitHub:</h4>
          <a target="_blank" href={sliderInfo.link} rel="noreferrer">
            {sliderInfo.link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSliderItem;
