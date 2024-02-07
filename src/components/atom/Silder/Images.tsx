import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss'

interface IImage {
    path: any
}

interface IPath {
    id: number,
    path: any
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
            {
                props.path.map((value: IPath) => (
                    <div key={value.id}>
                        <img src={'http://127.0.0.1:3000/' + value.path} alt="" />
                    </div>
                ))
            }
        </Slider>
    )
}

export default Images
