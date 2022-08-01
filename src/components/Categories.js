import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Title from '../components/dif/Title';
import { FiPlus } from 'react-icons/fi';
import React from 'react';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent'
      },
      content: {
        position: 'fixed',
        top: '45px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
};
Modal.setAppElement('#root');


export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(response => response.json())
            .then(response => setCategories(response))
    }
        , []);

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(response => response.json())
            .then(response => setProducts(response))
    }, []);

    return (

        <div className="bg-white py-4">
            <div className="container mx-auto">
                <Title className="ml-6" >Kategoriler</Title>
                <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-10">
                    {categories.map(category => {
                        return <button className='flex flex-col group items-center gap-y-2 text-center p-4 transition hover:bg-purple-100' key={category.id}>
                            <img src={category.image} onClick={openModal} className="w-12 h-12 rounded border border-gray-200" />
                            <span onClick={openModal} className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-getir-color tracking-tighter">{category.title}</span>
                            <Modal
                                isOpen={modalIsOpen}
                                style={customStyles}
                                contentLabel="products"
                                onRequestClose={ closeModal}        
                            > 
                                <div>
                                    <Title className="ml-6"> Meyve ve Sebze </Title>
                                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-0.1 rounded-lg overflow-hidden">
                                        {products.map(product => { 
                                            return <div className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold p-3">
                                                <button onClick={openModal} className="absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg transition-colors text-brand-color shadow-md hover:border-brand-color">
                                                    <FiPlus size={16} />
                                                </button>
                                                <img src={product.image} alt={product.title} />
                                                <div className="text-getir-color">{product.price}</div>
                                                <div className="text-gray-900">{product.title}</div>
                                                <div className="text-gray-500">{product.size}</div>

                                            </div>
                                        })}
                                    </div>
                                </div>
                            </Modal>
                    
                        </button>
                    })}
                </div>
            </div>
        </div>

    )

}
