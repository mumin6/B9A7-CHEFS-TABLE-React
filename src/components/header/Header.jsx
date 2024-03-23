
import { RxAvatar } from "react-icons/rx";

const Header = () => {
    return (
        <div>

            <div className="navbar bg-base-100 flex justify-between flex-col md:flex-row">
                <div className="lg:navbar-start">
                    <a className="btn btn-ghost text-xl"><h1 className='text-3xl font-bold'>Recipe Calories</h1></a>
                </div>
                <div className=" lg:navbar-center hidden lg:block md:block">
                    <div className="flex">
                        <p className="p-4"><a href="">Home</a></p>
                        <p className="p-4"><a href="">Recipes</a></p>
                        <p className="p-4"><a href="">About</a></p>
                        <p className="p-4"><a href="">Search</a></p>
                    </div>

                </div>
                <div className=" lg:navbar-end">
                    <div className="form-control p-1">

                        <label className="input input-bordered rounded-3xl  flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Search" />

                        </label>
                    </div>


                    <div>
                        <button className="btn btn-success rounded-full text-center text-xl font-bold"><RxAvatar /></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;