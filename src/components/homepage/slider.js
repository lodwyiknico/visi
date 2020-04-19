import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jokOne from '../../assets/jok.PNG'
import mclaren from '../../assets/mclaren.jpg'
import jokTwo from '../../assets/joks.PNG'
import bugati from '../../assets/bugati.jpg'
import galardo from '../../assets/galardo.PNG'

const slide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: false,
        prevArrow: false
    };
    return (
        <Slider style={{ width: '100%' }} {...settings}>
            <div>
                <img src={jokTwo} alt='one' height="620" width="100%" />
            </div>
            <div>
                <img src={mclaren}  alt='two' height="620" width="100%" />
            </div>
            <div>
                <img src={jokOne} alt='tree' height="620" width="100%" />
            </div>
            <div>
                <img src={bugati} alt='four' height="620" width="100%" />
            </div>
            <div>
                <img src={galardo} alt='five' height="620" width="100%" />
            </div>
        </Slider>
    )
}

export default slide