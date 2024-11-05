import chefImage from '../../assets/images/chef.jpg'; 

const Banner = () => {
    return (
        <div className="relative h-screen  bg-cover rounded-2xl bg-center" 
            style={{
                backgroundImage: `url(${chefImage})`,
            }}>
            {/* Overlay to darken the image */}
            <div className="absolute inset-0 rounded-2xl bg-black opacity-50"></div>

            {/* Banner Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
                <h1 className="text-2xl md:text-6xl font-bold mb-4">
                    Discover an exceptional cooking class tailored for you!
                </h1>
                <p className="text-base md:text-xl max-w-xl mb-8">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database, and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                </p>
                <div className="flex space-x-4">
                    {/* Explore Now Button */}
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full">
                        Explore Now
                    </button>
                    {/* Our Feedback Button */}
                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-full">
                        Our Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
