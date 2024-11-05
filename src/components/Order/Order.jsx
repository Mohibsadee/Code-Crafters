import { useEffect, useState } from "react";
import CookingCard from "./CookingCard";
import OngoinCard from "./OngoinCard";

const Order = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCookRecipes, setWantToCookRecipes] = useState([]);
    const [currentlyCookingRecipes, setCurrentlyCookingRecipes] = useState([]);

    // Fetch recipes from JSON
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('/recipes.json');
                if (!response.ok) throw new Error("Failed to fetch recipes");

                const data = await response.json();
                const updatedRecipes = data.map(recipe => ({
                    ...recipe,
                    recipe_id: Number(recipe.recipe_id) // Ensure recipe_id is a number
                }));
                setRecipes(updatedRecipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };
        fetchRecipes();
    }, []);

    // Handle adding to "Want to Cook" list
    const handleWantToCook = (recipe) => {
        const existingRecipe = wantToCookRecipes.find(r => r.recipe_id === recipe.recipe_id);

        if (existingRecipe) {
            alert("Recipe already in the Want to Cook list!");
        } else {
            setWantToCookRecipes(prevRecipes => [...prevRecipes, recipe]);
        }
    };



    // Handle moving from "Want to Cook" to "Currently Cooking"


    const handleCooking = (recipe) => {
        const recipeIdToRemove = recipe.recipe_id;

        // Remove from Want to Cook
        setWantToCookRecipes(prevRecipes =>
            prevRecipes.filter(r => r.recipe_id !== recipeIdToRemove)
        );

        // Add to Currently Cooking
        setCurrentlyCookingRecipes(prevRecipes => [...prevRecipes, recipe]);
    };


    
    return (
        <div className="flex flex-col md:flex-row md:w-full">
            {/* Cooking Card Section */}
            <div className="grid lg:grid-cols-2 lg:w-2/3 gap-2 w-full">
                {recipes.map(recipe => (
                    <CookingCard
                        key={recipe.recipe_id}
                        recipe={recipe}
                        onWantToCook={() => handleWantToCook(recipe)}
                    />
                ))}
            </div>

            {/* Ongoing Recipes Section */}
            <div className="md:px-2 py-2 md:py-0 md:w-2/3 w-full">
                <OngoinCard
                    wantToCookRecipes={wantToCookRecipes}
                    currentlyCookingRecipes={currentlyCookingRecipes}
                    onCooking={handleCooking} // Pass the function to OngoinCard
                />
            </div>
        </div>
    );
};

export default Order;
