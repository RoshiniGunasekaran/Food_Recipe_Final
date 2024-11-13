import React from 'react';
import Navbar from '../components/Navbar';
import Image from '../assets/welcome1.png'; // Welcome image
import FoodImage1 from '../assets/food1.jpg'; // Food image 1
import FoodImage2 from '../assets/food2.jpg'; // Food image 2
import FoodImage3 from '../assets/food6.jpg'; // Food image 3
import { useNavigate } from 'react-router-dom';
import './Footer.css'; // Import Footer CSS
import './Welcome.css'; // Import Welcome Page CSS

const Details = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    // Function to navigate to the cart page
    const handleFoodClick = () => {
        navigate('/Details'); // Replace '/cart' with the correct path to your cart page
    };

    return (
        <div className="welcome-page">
            <Navbar />
            <div className="content_welcome">
                <h1>Welcome to Food Identification AI</h1>
                <p>
                    Our AI-powered food identification system helps you identify various food items with ease.
                    Using cutting-edge computer vision and machine learning, we can classify foods accurately and
                    provide nutritional information, preparation tips, and more.
                </p>
                <button className="button_welcome" onClick={handleClick}>
                    Explore Me
                </button>
            </div>
            <div className="image_welcome">
                <img src={Image} alt="Welcome" />
            </div>

            {/* New Trending Foods Section */}
            <div className="trending-foods">
                <h2>Top Three Trending Foods</h2>
                <p>Discover the top trending dishes that everyone is talking about this season!</p>
                <div className="food-items">
                    <div className="food-item" onClick={handleFoodClick}>
                        <img src={FoodImage1} alt="Food 1" />
                        <h3>Food Name 1</h3>
                        <p>Brief description about this food, its ingredients, and why it's trending.</p>
                    </div>
                    <div className="food-item" onClick={handleFoodClick}>
                        <img src={FoodImage2} alt="Food 2" />
                        <h3>Food Name 2</h3>
                        <p>Brief description about this food, its ingredients, and why it's trending.</p>
                    </div>
                    <div className="food-item" onClick={handleFoodClick}>
                        <img src={FoodImage3} alt="Food 3" />
                        <h3>Food Name 3</h3>
                        <p>Brief description about this food, its ingredients, and why it's trending.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-column">
                    <h3>Pradeepa S</h3>
                    <p>Email: <a href="pradeepas.22aim@kongu.edu">pradeepas.22aim@kongu.edu</a></p>
                    <p>GitHub: <a href="https://github.com/PRADEEPASRINI" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/pradeepa-s09/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                </div>
                <div className="footer-column">
                    <h3>Roshini G</h3>
                    <p>Email: <a href="roshinig.22aim@kongu.edu">roshinig.22aim@kongu.edu</a></p>
                    <p>GitHub: <a href="https://github.com/RoshiniGunasekaran" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/roshini-gunasekaran/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                </div>
                <div className="footer-column">
                    <h3>Yoganath M</h3>
                    <p>Email: <a href="yoganathm.22aim@kongu.edu">yoganathm.22aim@kongu.edu</a></p>
                    <p>GitHub: <a href="https://github.com/yoganath-m" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/yoganath-m-893818320/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Details;
