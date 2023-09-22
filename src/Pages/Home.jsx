import React, { useState, useEffect } from "react";
import "../Styles/Landing.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "img/cake1.jpg",
    "img/cake2.jpg",
    "img/cake3.jpg",
    "img/cake5.jpg"
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    // Automatically advance to the next image every 3 seconds (adjust as needed)
    const interval = setInterval(() => {
      nextImage();
    }, 10000); // 3000 milliseconds (3 seconds)

    return () => {
      // Clear the interval when the component unmounts to prevent memory leaks
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="homeContainer">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`carouselImage ${
              index === currentIndex ? "selected" : "hidden"
            }`}
          />
        ))}
        <div className="carouselButtons">
          <button className="prev" onClick={prevImage}>
          &#10092;
          </button>
          <button className="next" onClick={nextImage}>
          &#10093;
          </button>
        </div>
      </div>
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
