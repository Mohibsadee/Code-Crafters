import PropTypes from 'prop-types';





const CurrCooking = ({ currentlyCookingRecipes }) => {




    const totalCalories = currentlyCookingRecipes.reduce((sum, recipe) =>
        sum + parseInt(recipe.calories), 0);



    const totalTime = currentlyCookingRecipes.reduce((sum, recipe) => {
        const time = parseInt(recipe.preparing_time); 
        return sum + (isNaN(time) ? 0 : time); 
    }, 0);




    return (
        <div className="py-4">
            <h2 className="font-bold border-b-2 text-lg mx-2 pb-2">Currently cooking: {currentlyCookingRecipes.length}</h2>
            <div className="text-start overflow-x-auto py-4">
                <table className="table table-auto text-gray-600 w-full table-zebra">
                    <thead>
                        <tr>
                            <th className="text-left">#</th>
                            <th className="p-2 sm:p-4 text-left">Name</th>
                            <th className="text-left">Time</th>
                            <th className="text-left">Calories</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-100 p-4">
                        {currentlyCookingRecipes.map((recipe, index) => (
                            <tr key={recipe.recipe_id}>
                                <th className="px-2 py-2 sm:px-4 sm:py-4 text-left">{index + 1}</th>
                                <td className="px-2 py-2 sm:px-4 sm:py-4 text-left">{recipe.recipe_name}</td>
                                <td className="px-2 py-2 sm:px-4 sm:py-4 text-left">{recipe.preparing_time}</td>
                                <td className="px-2 py-2 sm:px-4 sm:py-4 text-left">{recipe.calories}</td>
                            </tr>
                        ))}
                        <tr className="font-bold">
                            <td></td>
                            <td className="px-2 py-2 sm:px-4 sm:py-4 text-left">Totals</td>
                            <td className="px-2 py-2 sm:px-4 sm:py-4 text-left">{totalTime} minutes</td>
                            <td className="px-2 py-2 sm:px-4 sm:py-4 text-left">{totalCalories} cal</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};



CurrCooking.propTypes = {
    currentlyCookingRecipes: PropTypes.arrayOf(
        PropTypes.shape({
            recipe_id: PropTypes.number.isRequired,
            recipe_name: PropTypes.string.isRequired,
            preparing_time: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,
};


export default CurrCooking;
