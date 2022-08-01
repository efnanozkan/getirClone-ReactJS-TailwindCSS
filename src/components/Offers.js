import { useState, useEffect } from "react";
import Slider from "react-slick";
import Title from 'components/dif/Title';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useWindowWidth } from '@react-hook/window-size'

function NextBtn({ className, style, onClick }) {
    return (
        <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
            <IoIosArrowForward size={22} />
       </button>
    )
}

function PrevBtn({ className, style, onClick }) {
    return (
        <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
            <IoIosArrowBack size={22} />
        </button>
    )
}


export default function Offers() {

    const windowW = useWindowWidth()


    const [offers, setOffers] = useState([]);
 
    useEffect(() => {
        fetch("http://localhost:5000/offers")
            .then(response => response.json())
            .then(response => setOffers(response))
    }
    , []);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear",
        arrows: true,
		nextArrow: <NextBtn />,
		prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="container mx-auto md:pt-8 tracking-tighter">
              <div className="hidden md:block">
                <Title className="ml-6">Kampanyalar</Title>
            </div>
            <Slider className="md:-mx-2  tracking-tightest" {...settings}>
            {offers.map(offer => {
            return <div key={offer.id}>
                        <picture className="block md:px-2">
                            <img src={offer.image} className="md:rounded-lg" />
                        </picture>
                    </div>
            })}
            </Slider>
        </div>
    )
}