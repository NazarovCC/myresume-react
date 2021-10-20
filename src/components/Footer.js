import React from 'react';

const Footer = ({ telegram, github }) => {
  return (
    <div className="footer">
      <div className="footer_block">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/telegram-app.png"
          alt="telegram"
        />
        <a href={telegram}>{telegram}</a>
      </div>
      <div className="footer_block">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
          alt="github"
        />
        <a href={github}>{github}</a>
      </div>
    </div>
  );
};

export default Footer;
