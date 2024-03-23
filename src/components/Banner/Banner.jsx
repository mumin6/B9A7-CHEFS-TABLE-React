
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[url('../src/assets/banner.jpg')] lg:mx-6 mx-auto bg-cover rounded-xl lg:w-full" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-screen-md">
                        <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">
                            Embark on a culinary adventure with Flavor Fusion, your ultimate destination for diverse recipes, cooking tips, and culinary inspiration.</p>
                        <button className="btn btn-success">Explore Now</button>
                        <button className="btn glass lg:ml-4">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;