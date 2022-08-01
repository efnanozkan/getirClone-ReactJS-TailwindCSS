import { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import Slider from "react-slick";
import { useWindowWidth, } from '@react-hook/window-size';


export default function Slide() {
    const [selected, setSelected] = useState("TR");

    const windowW = useWindowWidth()

    const phones = {
        AF: '+93',
        DE: '+49',
        US: '+1',
        AD: '+376',
        AO: '+244',
        AG: '+1268',
        AR: '+54',
        TR: '+90',
        IT: '+7',
        IN: '+15',


    }
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };

    return (
        <div className="relative h-auto md:h-[450px] transition-all before:bg-gradient-to-r before:from-third-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            {windowW >= 768 && <Slider {...settings}>
                <div>
                    <img className="w-full h-[450px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt="1" />
                </div>
                <div>
                    <img className="w-full  h-[450px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" alt="2" />
                </div>
                <div>
                    <img className="w-full  h-[450px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" alt="3" />
                </div>
                <div>
                    <img className="w-full  h-[450px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="4" />
                </div>
            </Slider>}
            <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
                <div className="hidden md:block">
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt='logomutluluk' />
                    <h3 className="text-4xl mt-8 font-semibold text-white">
                        Dakikalar içinde <br /> kapınızda <br />
                    </h3>
                </div>
                <div className="w-full md:w-[400px] min-h-fit md:rounded-lg bg-gray-50 p-6">
                    <h4 className="text-getir-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
                    <div className='grid gap-y-4'>
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                onSelect={code => setSelected(code)}
                                selected={selected}
                                className="flag-select"
                            />
                            <label className="flex-1 relative group block cursor-pointer">
                                <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-second-color focus:border-second-color outline-none peer text-sm pt-2" />
                                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-second-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-second-color peer-valid:text-xs">Telefon Numarası</span>
                            </label>
                        </div>
                        <button className="bg-yellow text-second-color transition-colors hover:bg-second-color hover:text-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
                            Telefon numarası ile devam et
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
