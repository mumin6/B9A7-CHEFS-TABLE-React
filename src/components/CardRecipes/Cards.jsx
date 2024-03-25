import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="flex flex-col lg:flex-row">
            <div className=' lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 '>
                {
                    cards.map(card => <Card key={card.recipe_id} card={card}></Card>)
                }

            </div>
            <div className="lg:w-1/3 p-2">
                <p className="text-2xl text-center font-semibold">Want to cook</p>
                <hr />

            </div>
        </div>
    );
};

export default Cards;