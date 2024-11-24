import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './meal.css';
import Loading from "./Loading/Loading";

function Meal() {
    // All the needed useStates as well as useParams for react-router-dom
    const { idMeal } = useParams();
    const [meal, setMeal] = useState([]);
    const [loading, setIsLoading] = useState(true);

    // Fetching information about the chosen meal by taking idMeal and searching for it inside the API
    useEffect(() => {
        const fetchMeal = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                if (!response.ok) throw new Error("Failed to fetch data");

                const result = await response.json();
                console.log(result);

                if (result.meals && result.meals.length > 0) {
                    setMeal(result.meals[0]);
                } else {
                    setMeal([]);
                }

                // Adding some delay to let every resource load
                setTimeout(() => {
                    setIsLoading(false);
                }, 300);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchMeal();
    }, [idMeal]);

    // returning a Loading screen
    if (loading) return <Loading></Loading>;

    // returning a message for the user if the meal details are not found
    if (!meal) return <p className="text-danger">Meal details not found.</p>;

    // Process ingredients
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({ ingredient, measure });
        }
    }

    return (
        // All information about the chosen meal
        <div className="meal">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h1>{meal.strMeal}</h1>
            <p><strong>Culture: </strong> {meal.strArea}</p>
            <p><strong>Category: </strong> {meal.strCategory}</p>
            <p><strong>Instructions: </strong> {meal.strInstructions}</p>
            <h2>Ingredients:</h2>

            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>
                        <strong>{item.ingredient}:</strong> {item.measure}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Meal;
