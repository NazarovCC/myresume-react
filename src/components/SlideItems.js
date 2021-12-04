import React, { Fragment } from 'react';

const SlideItem = (props) => {
  const slideOverHandler = (element) => {
    element.classList.add('active');
  };
  const slideLeaveHandler = (element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  };

  return (
    <Fragment>
      <div
        className="slide"
        style={{ backgroundImage: `url(${props.sliderData.url})` }}
        onMouseOver={(e) => slideOverHandler(e.target)}
        onMouseLeave={(e) => slideLeaveHandler(e.target)}
        onClick={() => props.infoForClick(props.sliderData.id)}
      >
        <h3>{props.sliderData.title}</h3>
      </div>
    </Fragment>
  );
};

export default SlideItem;
