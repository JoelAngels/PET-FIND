import React from "react";
import Kombucha from "../../images/Kombucha1.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="section-a">
      <div className="container">
        <div className="image-kom">
          <img src={Kombucha} alt="img" />
        </div>

        <div className="text">
          <h4>Organic TEA</h4>
          <h1 className="mega-font">
            Hello
            <span> Pet Lovers</span>
          </h1>
          <p style={{ fontSize: "30px" }}>
            An online platform to search for animals who need homes. A directory
            of animal shelters and adoption organizations in Canada.
          </p>

          <p className="number">$ 89.99</p>
          <hr width="50%" />
          <a href="#" className="button">
            Explore Now
          </a>
          <div className="column-grid">
            <div className="column-1">
              <h3>Ingredients</h3>
              <p>100% Organic</p>
            </div>
            <div className="column-2">
              <h3>Flavours</h3>
              <p>5 variations</p>
            </div>
            <div className="column-3">
              <h3>Volume</h3>
              <p>465ml</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
