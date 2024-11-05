import PropTypes from "prop-types";

const Preparing = ({ wantToCookRecipes, onCooking }) => {
    return (
        <div className="w-full">
            <h2 className="font-bold border-b-2 text-lg mx-2 p-4 sm:p-6">Want to cook: {wantToCookRecipes.length}</h2>
            <div className="text-start overflow-x-auto">
                <table className="table table-auto text-gray-600 w-full table-zebra">
                    <thead>
                        <tr>
                            <th className="text-left">#</th>
                            <th className="p-2 sm:p-4 text-left">Name</th>
                            <th className="text-left">Time</th>
                            <th className="text-left">Calories</th>
                            <th className="text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-100 p-4">
                        
                        {wantToCookRecipes.map((recipe, index) => (

                            <tr key={recipe.recipe_id}>

                                <th className="px-2 py-2 sm:px-4 sm:py-4 text-left">{index + 1}</th>
                                <td className="px-2 py-2 sm:px-4 sm:py-4 text-left">{recipe.recipe_name}</td>
                                <td className="px-2 py-2 sm:px-4 sm:py-4 text-left">{recipe.preparing_time}</td>
                                <td className="px-2 py-2 sm:px-4 sm:py-4 text-left">{recipe.calories}</td>
                                <td className="px-2 py-2 sm:px-4 sm:py-4 text-left">
                                    <button 
                                        onClick={() => onCooking(recipe)} 
                                        className=" bg-green-500 p-4 font-bold text-black rounded-full"
                                    >
                                        Preparing
                                    </button>
                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Preparing.propTypes = {
    wantToCookRecipes: PropTypes.arrayOf(
        PropTypes.shape({
            recipe_id: PropTypes.number.isRequired,
            recipe_name: PropTypes.string.isRequired,
            preparing_time: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,
    onCooking: PropTypes.func.isRequired,
};

export default Preparing;
