import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss'

interface IImage {
    path: string
}

const Images = (props: IImage) => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={'/images/' + props.path} alt="" />
            </div>
            <div>
                <img src={'/images/' + props.path} alt="" />
            </div>
        </Slider>
    )
}

export default Images
