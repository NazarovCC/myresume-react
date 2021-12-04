import axios from 'axios';
import React, { useState, useMemo } from 'react';
import { Breakpoint } from 'react-socks';
import SlideItems from './SlideItems';
import SlideItemForMobile from './SliderItemForModile';
import MyModal from './UI/Modal/MyModal';
import InfoSliderItem from './InfoSliderItem';

const Slider = ({ reposVue }) => {
  const [sliderData, setSliderData] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [infoRepos, setInfoRepos] = useState({});
  const arrUrl = [
    {
      link: 'https://sun9-64.userapi.com/impg/avXB3DZRzsBsY3ahb7X0eEwv84YZTQqGppDwDw/c65Nq7RJxRE.jpg?size=1905x500&quality=96&sign=c7d73861ecd7dfa3ae64b97c2905d663&type=album',
      description: 'Позволяет сохранять ссылки на нужные сайты',
    },
    {
      link: 'https://sun9-86.userapi.com/impg/c-NVNjNsKtVMK6GMxgOcyUUN_svpvoVdL_jURQ/4zVLjn-8I28.jpg?size=826x288&quality=96&sign=44598f8b457020c831daf5d71feb304c&type=album',
      description: 'Опросник с разными вариантами ответов',
    },
    {
      link: 'https://sun9-79.userapi.com/impg/uRskRhlH_stWT3CvKZAUVo6vQ7hmMg_ZZhg7CQ/qkzuuXZCtvQ.jpg?size=1202x571&quality=96&sign=f9ea725193f36758f5b5e1b1da6b5978&type=album',
      description: 'Резюме',
    },
    {
      link: 'https://sun9-78.userapi.com/impg/RiJ7Ggf2jkT6pz3AcfewvwRHKwEiiZY5f69FYw/BRUza9uYPnU.jpg?size=548x347&quality=96&sign=5882f9f556b7f19f6557413975c2f870&type=album',
      description: 'Панель администратора',
    },
    {
      link: 'https://sun9-85.userapi.com/impg/s3qTdZSm_jWxN1ssiOfSwugVawyDht-wIklfhw/-nIFgAwHxo4.jpg?size=1797x686&quality=96&sign=cd691e47e37269b6ac550083bfaf0e77&type=album',
      description: 'Галерея фильмов',
    },
  ];

  useMemo(() => {
    const sortRepos = [...reposVue].sort((a, b) => a.id - b.id);
    const newSlider = sortRepos.reduce((acc, elem, index) => {
      const obj = {};
      obj['id'] = elem.id;
      obj['url'] = arrUrl[index].link;
      obj['description'] = arrUrl[index].description;
      obj['title'] = elem.name;
      obj['link'] = elem.html_url;
      acc.push(obj);
      return acc;
    }, []);
    setSliderData(newSlider);
  }, [reposVue]);

  const infoHandler = (id) => {
    const info = sliderData.find((data) => data.id === id);
    setInfoRepos(info);
    setVisibleModal(true);
  };

  return (
    <div>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <InfoSliderItem sliderInfo={infoRepos} setVisible={setVisibleModal} />
      </MyModal>
      <div className="back-container">
        <Breakpoint large up>
          <div className="slider-container">
            {sliderData.map((slider) => (
              <SlideItems
                sliderData={slider}
                key={slider.id}
                infoForClick={infoHandler}
              />
            ))}
          </div>
        </Breakpoint>
        <Breakpoint medium down>
          <div className="slider-container-mobile">
            {sliderData.map((slider) => (
              <SlideItemForMobile sliderData={slider} key={slider.id} />
            ))}
          </div>
        </Breakpoint>
      </div>
    </div>
  );
};

export default Slider;
