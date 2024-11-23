import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading/Loading";
import './meals.css';

function Meals() {
    const [meals, setMeals] = useState([]);
    const [searchedMeal, setSearchedMeal] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchData = async () => {
        setIsLoading(true);
        setErrorMessage("");
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`);
            if (!response.ok) throw new Error("Failed to fetch data");

            const result = await response.json();
            console.log(result);

            if (result.meals) {
                setMeals(result.meals);
            } else {
                setMeals([]);
                setErrorMessage("No meals found for this search. Please try another term.");
            }

            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setMeals([]);
            setIsLoading(false);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className="meals container">
            {isLoading && <Loading />}
            <h1 className="my-4">Meals</h1>
            <form className="d-flex mb-4" onSubmit={handleSearch}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search for a meal..."
                    aria-label="Search"
                    value={searchedMeal}
                    onChange={(e) => setSearchedMeal(e.target.value)}
                />
                <button className="btn btn-outline-dark" type="submit">
                    Search
                </button>
            </form>

            {errorMessage && <p className="text-danger">{errorMessage}</p>}

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {meals.map((meal, index) => (
                    <div key={index} className="col">
                        <Link to={`/meal/${meal.idMeal}`} className="meal-card text-decoration-none">

                            <div className="card shadow-sm h-100">
                                <img
                                    src={meal.strMealThumb}
                                    className="card-img-top img-fluid rounded"
                                    alt={meal.strMeal}
                                    style={{ objectFit: 'cover', height: '200px' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{meal.strMeal}</h5>
                                    <p className="card-text"><strong>Culture:</strong> {meal.strArea}</p>
                                    <p className="card-text"><strong>Category:</strong> {meal.strCategory}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Meals;
