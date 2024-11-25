import './about.css';

function About() {
    return (
        // all the necessary HTML elements
        <div className="about-container">
            <div className="about-content">
                <h1 className="animated fadeInDown">About Us</h1>
                <p className="animated fadeIn">
                    Welcome to our website, your ultimate destination for discovering delicious meals from around the world! 
                    Whether you are a foodie looking for inspiration or a chef seeking new ideas, we’ve got something for you.
                </p>
                <p className="animated fadeIn">
                    Our platform offers a seamless and intuitive experience built with ReactJS. From detailed meal descriptions 
                    to ingredient lists, we aim to provide all the tools you need to make your culinary journey enjoyable.
                </p>
                <a href="/meals" className="btn btn-primary btn-lg animated fadeInUp">Explore Meals</a>
            </div>
        </div>
    );
}

export default About;
