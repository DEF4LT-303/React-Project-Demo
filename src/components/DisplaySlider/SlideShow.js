import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import classes from './SlideShow.module.css';

const images = [
  'https://preview.redd.it/nzf7mlkli5k71.png?auto=webp&s=8ce1103c1231392893235dc8b7524b035dc5c24a',
  'https://staticg.sportskeeda.com/editor/2022/08/2bea8-16608644287140-1920.jpg',
  'https://i0.wp.com/news.seagm.com/wp-content/uploads/2021/09/howtotopupgenesisSEAGMFeaturedImage20210908.jpg?fit=1200%2C675&ssl=1'
];
const delay = 2500;

function Slideshow() {
  let settings = {
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1

    // responsive: [
    //   {
    //     breakpoint: 960,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 2
    //     }
    //   }
    // ]
  };

  return (
    <div className={classes.img}>
      <Slider {...settings}>
        {images.map((current) => (
          <img alt={'users here'} src={current} width='100%' height='800px' />
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow;
