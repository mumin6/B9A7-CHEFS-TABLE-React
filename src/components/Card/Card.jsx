import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";


const Card = ({ card }) => {

    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = card;
    const name = ingredients.map(ig => <li className="text-neutral-500">{ig}</li>)

    return (
        <div className="m-2 p-2 bg-slate-200 rounded-2xl">
            <img className="rounded-2xl" src={recipe_image} alt="" srcset="" />
            <h1 className=" font-semibold text-xl text-black mt-2">{recipe_name}</h1>
            <p className="text-neutral-500">{short_description}</p>
            <p className="text-lg text-black">Ingredients: {ingredients.length}</p>
            <ul className="mt-2">{name}</ul>
            <div className="mt-4 flex align-middle">
                <p className="mx-2 flex text-center text-black"> <LuClock3/> <span className="ml-2">{preparing_time}</span>minutes</p>

                <p className="ml-4 flex text-center"><FaFire /> <span className="ml-2">{calories} calories</span></p>
            </div>
            <button className="btn rounded-3xl btn-success text-center mt-4">Want to Cook</button>
        </div>
    );
};
export default Card;