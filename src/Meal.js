import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './meal.css';
import Loading from "./Loading/Loading";

function Meal() {

    // all the necesarry useStates as well as useParams for react-router-dom
    const { idMeal } = useParams();
    const [meal, setMeal] = useState([]);
    const [loading, setIsLoading] = useState(true);

    // Fetching from the API by the idMeal parameter
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

    // returning the Loading screen
    if (loading) return <Loading></Loading>;

    // returning information to the user if meal details haven't been found
    if (!meal) return <p className="text-danger">Meal details not found.</p>;

    // necesarry for loop to get every ingredient from the API that particular meal has
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({ ingredient, measure });
        }
    }

    return (
        <div className="meal">
            {meal.strYoutube && (
                <div className="meal-video">
                    <iframe
                        width="100%"
                        height="600"
                        src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Meal Tutorial"
                    ></iframe>
                </div>
            )}

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
