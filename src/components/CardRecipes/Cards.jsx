import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import { toast } from 'react-toastify';
  


const Cards = () => {
  const [cards, setCards] = useState([]);
  const [cook,setCook]=useState([])

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleCard = (card) => {
    const exists = cook.find((item)=>item.recipe_id == card.recipe_id)
    if (exists) {
      return toast("It already exists");
    }
    const newCook = [...cook, card];
    setCook(newCook) ;
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 ">
        {cards.map((card) => (
          <Card handleCard={handleCard} key={card.recipe_id} card={card}></Card>
        ))}
      </div>
      <div className="lg:w-1/3 p-1 ">
        <p className="text-2xl text-center font-semibold">Want to cook</p>
        <hr />
        <div>
          <div className="overflow-auto lg:overflow-hidden">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cook.map((dish, index) => (
                  
                  <tr key={index}>
                    <th>{ index + 1}</th>
                    <td>{ dish.recipe_name}</td>
                    <td>{ dish.preparing_time} minutes</td>
                    <td>{ dish.calories} calories</td>
                   
                    <td>
                      <button className="btn rounded-3xl btn-success">Preparing</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
