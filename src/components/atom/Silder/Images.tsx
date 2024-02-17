import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';

const ImageSlider: React.FC<ImageProps> = ({ path }) => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    };

    return (
        <Slider {...settings}>
            {path && path.map(({ id, path }) => (
                <div key={id}>
                    <img src={`http://127.0.0.1:3000/${path}`} alt="" />
                </div>
            ))}
        </Slider>
    );
};

export default ImageSlider;
