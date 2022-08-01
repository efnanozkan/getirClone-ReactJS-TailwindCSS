import { useState } from 'react'
import React from "react";
import indir from "./images/indir.png";
import { FiGlobe } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io'
import { HiLocationMarker } from 'react-icons/hi'
import Modal from 'react-modal';
import ReactFlagsSelect from "react-flags-select";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export default function Header() {
    const [selected, setSelected] = useState("TR");


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
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const [modalIsOpening, setIsOpening] = React.useState(false);

    function openSignUp() {
        setIsOpening(true);
    }

    function closeModalTwo() {
        setIsOpening(false);
    }
    return (
        <>
            <div className="bg-getir-color">
                <div className="container mx-auto h-16 md:h-11 flex items-center justify-center md:justify-between">
                    <a href="#">
                        <img className="w-11" src={indir} alt="logo" ></img>
                    </a>
                    <nav className="hidden md:flex gap-x-8 text-sm font-semibold">
                        <a href="#" className=" gap-x-2 flex items-center text-white text-opacity-75 transition-all hover:text-opacity-100">
                            < FiGlobe size={18} />
                            Türkçe (TR)
                        </a>
                        <a href="#" className="gap-x-2 flex items-center text-white text-opacity-75 transition-all hover:text-opacity-100">
                            <FaUserAlt size={15} />
                            <button onClick={openModal} > Giriş Yap </button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="sign on"
                            >
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
                                        <h3 className='text-xs opacity-80 text-gray-500 pb-7'>Kişisel verilerinize dair Aydınlatma Metni için <a className='text-getir-color underline cursor-pointer font-bold' href='https://getir.com/yardim/kvkk/' target="_blank" rel="noopener noreferrer"> tıklayınız.</a> </h3>
                                        <h2 className=' text-center font-semibold text-sm opacity-80 text-gray-500'> Hala kayıt olmadınız mı? <a className='text-getir-color cursor-pointer font-semibold text-sm' href='#'> Kayıt Ol </a></h2>
                                    </div>

                                </div>
                            </Modal>
                        </a>
                        <a href="#" className="gap-x-2 flex items-center text-white text-opacity-75 transition-all hover:text-opacity-100">
                            <FaUserPlus size={18} />
                            <button onClick={openSignUp} > Kayıt Ol </button>
                            <Modal
                                isOpen={modalIsOpening}
                                onRequestClose={closeModalTwo}
                                style={customStyles}
                                contentLabel="sign up"
                            >
                                <div className="w-full md:w-[400px] min-h-fit md:rounded-lg bg-gray-50 p-6">
                                    <h4 className="text-getir-color text-center font-semibold mb-4">Kayıt Ol</h4>
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
                                        <label className="flex-1 relative group block cursor-pointer">
                                            <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-second-color focus:border-second-color outline-none peer text-sm pt-2" />
                                            <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-second-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-second-color peer-valid:text-xs"> Ad Soyad </span>
                                        </label>
                                        <label className="flex-1 relative group block cursor-pointer">
                                            <input type={"email"} required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-second-color focus:border-second-color outline-none peer text-sm pt-2" />
                                            <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-second-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-second-color peer-valid:text-xs"> E-Posta </span>
                                        </label>

                                        <h3 className='text-xs opacity-80 text-gray-500 pb-7 relative before:w-[6px] before:h-[6px] before:bg-getir-color before:absolute before:-left-4 before:top-2 before:-translate-y-1/2 before:rounded-full'> Kayıt olmakla <a className='text-getir-color underline cursor-pointer font-bold' href='https://getir.com/yardim/kullanim-kosullari/' target="_blank" rel="noopener noreferrer"> Kullanım Koşullarını</a>'nı onaylamış olursunuz. </h3>
                                        <h3 className='text-xs opacity-80 text-gray-500 -top-8 relative before:w-[6px] before:h-[6px] before:bg-getir-color before:absolute before:-left-4 before:top-2 before:-translate-y-1/2 before:rounded-full'> Kişisel verilerinize dair Aydınlatma Metni için <a className='text-getir-color underline cursor-pointer font-bold' href='https://getir.com/yardim/kvkk/' target="_blank" rel="noopener noreferrer"> tıklayınız. </a> </h3>
                                        <label className="flex-1 relative group block cursor-pointer">
                                            <input type={"checkbox"} className="text-xs"/> Getir'in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum.
                                            </label>
                                        <button className="bg-getir-color text-slate-100 transition-colors hover:bg-second-color h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
                                            Kayıt Ol
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        </a>
                    </nav>
                </div>
            </div>
            <div className="container mx-auto flex md:hidden items-center h-10 px-2 justify-between">
                <div className="flex items-center gap-x-2 text-sm font-semibold text-gray-800">
                    <HiLocationMarker size={18} className="text-second-color" />
                    Teslimat Adresi Belirle
                </div>
                <IoIosArrowForward size={18} className="text-second-color" />
            </div>
        </>
    )
}