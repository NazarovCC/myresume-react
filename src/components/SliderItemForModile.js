import React, { Fragment } from 'react';

const SlideItemForMobile = (props) => {
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
        onDoubleClick={() => window.location.replace(props.sliderData.link)}
      >
        <h3 style={{ fontSize: 15 }}>{props.sliderData.title}</h3>
      </div>
    </Fragment>
  );
};

export default SlideItemForMobile;
