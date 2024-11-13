import React from "react";
import './Details.css';

const Details = () => {
  return (
    <main className="main">
      {/* Full-screen White Overlay */}
      <div className="wrapper-overlay"></div>

      {/* Wrapper Section */}
      <section className="section wrapper wrapper-section">
        <div className="containers wrapper-column">
          <div className="wrapper-bgimage">
            <img
              src="https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum-Low-Carb-Keto-Pancakes-Recipe-21.jpg"
              className="wrapper-image"
              alt="cake"
            />
          </div>
          <div className="wrapper-content">
            <div className="wrapper-inform">
              <span className="badge badge-darken">Delicious Cake</span>
              <h1 className="display-medium font-bold">Chocolate Lava Cake</h1>
              <p className="text-base font-normal">
                Indulge in the rich, molten center of this irresistible chocolate cake.
                A perfect balance of decadent flavor and luxurious texture that will melt in your mouth.
              </p>
            </div>

            {/* Nutritional Information */}
            <div className="wrapper-nutrients">
              <h2 className="text-large font-bold">Nutritional Information</h2>
              <ul className="nutrient-list">
                <li><strong>Calories:</strong> 450 kcal per serving</li>
                <li><strong>Fat:</strong> 25g</li>
                <li><strong>Carbs:</strong> 50g</li>
                <li><strong>Protein:</strong> 6g</li>
                <li><strong>Sugar:</strong> 30g</li>
                <li><strong>Fiber:</strong> 3g</li>
              </ul>
            </div>

            {/* Preparation Steps */}
            <div className="wrapper-prep-steps">
              <h2 className="text-large font-bold">Preparation Steps</h2>
              <ol className="prep-steps-list">
                <li>Preheat your oven to 375°F (190°C).</li>
                <li>Grease and flour 4 small ramekins or use baking spray.</li>
                <li>In a bowl, melt 8 oz of dark chocolate and 1/2 cup butter in the microwave or over a double boiler.</li>
                <li>In a separate bowl, whisk together 2 eggs, 2 egg yolks, and 1/4 cup sugar until frothy.</li>
                <li>Combine the melted chocolate and egg mixture. Then, fold in 1/4 cup flour and a pinch of salt.</li>
                <li>Divide the batter evenly between the prepared ramekins.</li>
                <li>Bake for 12-14 minutes, or until the edges are firm but the center is still soft.</li>
                <li>Allow the cakes to cool for 2 minutes, then invert them onto plates and serve warm.</li>
              </ol>
            </div>

            {/* Additional Information */}
            <div className="wrapper-additional">
              <h2 className="text-large font-bold">Additional Information</h2>
              <p className="text-base font-normal">
                Chocolate Lava Cake is the perfect dessert for any occasion. Its molten chocolate center is complemented
                by the slightly crispy outer layer, making it a delightful experience. Serve it with a scoop of vanilla
                ice cream or whipped cream for an extra indulgence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
