import PropTypes from "prop-types";

const CookingCard = ({ recipe, onWantToCook }) => {
    return (
        <div className="card bg-base-100 rounded-2xl border-2 text-start">
            <figure>
                <img
                    src={recipe.recipe_image}
                    alt={recipe.recipe_name}
                    className="h-48 w-full rounded-2xl py-2 object-cover"
                />
            </figure>
            <div className="card-body">
                <div className="border-b-2 p-2">
                    <h2 className="card-title font-bold">{recipe.recipe_name}</h2>
                    <p className="text-gray-600">{recipe.short_description}</p>
                </div>
                <div className="flex justify-between py-4">
                    <p className="flex items-center text-gray-600">{recipe.preparing_time}</p>
                    <p className="flex items-center text-gray-600">{recipe.calories}</p>
                </div>
                <div className="card-actions justify-between">
                    <button 
                        onClick={onWantToCook} 
                        className="btn bg-green-500 p-4 rounded-full"
                    >
                        Want to Cook
                    </button>
                </div>
            </div>
        </div>
    );
};

CookingCard.propTypes = {
    recipe: PropTypes.shape({
        recipe_id: PropTypes.number.isRequired,
        recipe_name: PropTypes.string.isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        recipe_image: PropTypes.string.isRequired,
        short_description: PropTypes.string,
    }).isRequired,
    onWantToCook: PropTypes.func.isRequired,
};

export default CookingCard;
