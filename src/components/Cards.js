import { useState, useEffect } from 'react'

export default function Cards() {
    const [cards, setCards] = useState([]);
 
    useEffect(() => {
        fetch("http://localhost:5000/cards")
            .then(response => response.json())
            .then(response => setCards(response))
    }
    , []);

    return (
     <div className='container mx-auto mt-8 grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4'>
    {cards.map(card => {
    return <div className='bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center' key={card.id}> 
    <img src={card.image} className="w-[150px] h-[150px] mb-6" />
    <h6 className="font-semibold text-lg text-second-color"> {card.title}</h6>
    <h6 className="mt-2 text-sm text-gray-700"> {card.description} </h6>
     </div>
     })}   
     </div>
    )
}