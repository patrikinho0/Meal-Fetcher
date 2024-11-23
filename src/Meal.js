import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './meal.css';
import Loading from "./Loading/Loading";

function Meal() {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState([]);
    const [loading, setIsLoading] = useState(true);

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
                    setMeal(null);
                }

                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
    
        fetchMeal();
    }, [idMeal]);
    

    if (loading) return <Loading></Loading>;

    if (!meal) return <p>Meal details not found</p>;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({ ingredient, measure });
        }
    }    

    if (loading) return <Loading></Loading>
    if (!meal) return <p className="text-danger">Meal details not found.</p>;


    return (
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
