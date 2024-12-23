import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading/Loading";
import './meals.css';

function Meals() {
    // All the needed useStates
    const [meals, setMeals] = useState([]);
    const [searchedMeal, setSearchedMeal] = useState("");
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedCulture, setSelectedCulture] = useState(""); // New state for selected culture
    const [cultures, setCultures] = useState([]); // To store unique culture options

    // Fetching from the API
    const fetchData = async () => {
        setIsLoading(true);  // Set loading to true when the request starts
        setErrorMessage("");
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=C`);
            if (!response.ok) throw new Error("Failed to fetch data");

            const result = await response.json();
            console.log(result);

            // If we fetch successfully set meals to the list
            if (result.meals) {
                setMeals(result.meals);
                setFilteredMeals(result.meals);

                // Extract unique cultures from the meal data
                const uniqueCultures = [
                    ...new Set(result.meals.map(meal => meal.strArea))
                ];
                setCultures(uniqueCultures);
            } else {
                setMeals([]);
                setFilteredMeals([]);
                setErrorMessage("No meals found.");
            }

            // Adding a delay to let the resources load
            setTimeout(() => {
                setIsLoading(false);
            }, 200);

        } catch (error) {
            // If error is caught display an error message to the user
            console.log(error);
            setMeals([]);
            setFilteredMeals([]);
            setIsLoading(false);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    // Fetch the data instantly
    useEffect(() => {
        fetchData();
    }, []);

    // Filter meals by searched name and selected culture
    useEffect(() => {
        setFilteredMeals(
            meals.filter((meal) =>
                meal.strMeal.toLowerCase().includes(searchedMeal.toLowerCase()) &&
                (selectedCulture ? meal.strArea === selectedCulture : true) // Filter by culture if selected
            )
        );
    }, [searchedMeal, meals, selectedCulture]);

    return (
        <div className="meals container">
            {isLoading && (
                <div className="loading-background">
                    <Loading />
                </div>
            )}
            <h1 className="my-4">Meals</h1>

            <div className="d-flex mb-4">
                <input
                    className="me-2"
                    type="search"
                    placeholder="Search for a meal..."
                    aria-label="Search"
                    value={searchedMeal}
                    onChange={(e) => setSearchedMeal(e.target.value)}
                />


                <select
                    className="form-select ms-2"
                    value={selectedCulture}
                    onChange={(e) => setSelectedCulture(e.target.value)}
                >
                    <option value="">All Cultures</option>
                    {cultures.map((culture, index) => (
                        <option key={index} value={culture}>
                            {culture}
                        </option>
                    ))}
                </select>
            </div>

            {errorMessage && <p className="text-danger">{errorMessage}</p>}

            {searchedMeal && filteredMeals.length === 0 && (
                <p className="text-danger">No meals match your search. Please try again.</p>
            )}

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {filteredMeals.map((meal, index) => (
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
