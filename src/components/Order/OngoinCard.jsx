import PropTypes from "prop-types";
import Preparing from "./Preparing";
import CurrCooking from "./CurrCooking";





const OngoinCard = ({ wantToCookRecipes, currentlyCookingRecipes, onCooking }) => {
    return (
        <div className="rounded-2xl border-2 text-center h-full py-4">

            <Preparing

                wantToCookRecipes={wantToCookRecipes}
                onCooking={onCooking}
            />

            <CurrCooking
                currentlyCookingRecipes={currentlyCookingRecipes}
            />


        </div>
    );
};





OngoinCard.propTypes = {
    wantToCookRecipes: PropTypes.arrayOf(
        PropTypes.shape({
            recipe_id: PropTypes.number.isRequired,
            recipe_name: PropTypes.string.isRequired,
            preparing_time: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
            recipe_image: PropTypes.string.isRequired,
            short_description: PropTypes.string,
        })
    ).isRequired,
    currentlyCookingRecipes: PropTypes.arrayOf(
        PropTypes.shape({
            recipe_id: PropTypes.number.isRequired,
            recipe_name: PropTypes.string.isRequired,
            preparing_time: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
            recipe_image: PropTypes.string.isRequired,
            short_description: PropTypes.string,
        })
    ).isRequired,

    onCooking: PropTypes.func.isRequired,


};

export default OngoinCard;
