import './home.css';

function Home() {
    return (
        // Every element that is displayed on the home page
        <div className="home">
            <div className="intro-section">
                <h1>Welcome to the Meal Finder Website!</h1>
                <p className="intro-text">
                    This website allows you to search for a wide variety of meals and get detailed information about each one. Explore different meal categories, check out ingredients, and find out how to prepare your favorite dishes.
                </p>
            </div>

            <div className="content-section">
                <section className="about-section">
                    <h2>About the Website</h2>
                    <p>
                        Meal Finder lets you explore meals from around the world. Whether you're looking for new recipes or just want to discover some tasty dishes, this website has you covered.
                    </p>
                </section>

                <section className="key-features-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li><strong>Search Functionality:</strong> Easily search for meals by name.</li>
                        <li><strong>Meal Details:</strong> Detailed information including ingredients, instructions, and more.</li>
                        <li><strong>Responsive Design:</strong> Full support for mobile and desktop views.</li>
                        <li><strong>Quick and Easy Access:</strong> Navigate through meals with just a few clicks.</li>
                    </ul>
                </section>

                <section className="how-to-use-section">
                    <h2>How to Use the Website</h2>
                    <ol>
                        <li><strong>Step 1:</strong> Enter a meal name in the search bar.</li>
                        <li><strong>Step 2:</strong> View a list of matching meals below the search bar.</li>
                        <li><strong>Step 3:</strong> Click on a meal to view detailed information about it.</li>
                        <li><strong>Step 4:</strong> Search again or explore other features!</li>
                    </ol>
                </section>

                <section className="additional-info-section">
                    <h2>Additional Information</h2>
                    <p>
                        If you encounter any issues or have suggestions for improving the website, feel free to reach out. Enjoy exploring new meals and recipes!
                    </p>
                </section>
            </div>

            <footer className="footer">
                <p>&copy; 2024 Meal Finder. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
