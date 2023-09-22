import React, { useEffect, useState } from 'react';
import '../Styles/Gallery.css';

function ImageGallery() {
  // Define your image filenames
  const imageFiles = [
    'axel1.jpg',
    'cake1.jpg',
    'cake2.jpg',
    'cake3.jpg',
    'cake4.jpg',
    'cake5.jpg',
    'cupcakes1.jpg',
    'julien1.jpg',
    'julien2.jpg',
    'julien3.jpg',
    'riley1.jpg',
    'riley2.jpg',
  ];

  // Shuffle the image filenames to display images in a random order
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledImages = shuffleArray(imageFiles);

  // Define the number of images in each row
  const imagesPerRow = [5, 3, 4];

  // Create an array of rows based on the number of images per row
  const [imageRows, setImageRows] = useState([]);

  useEffect(() => {
    const rows = [];
    let startIndex = 0;

    imagesPerRow.forEach((numImages) => {
      const row = shuffledImages.slice(startIndex, startIndex + numImages);
      startIndex += numImages;
      rows.push(row);
    });

    setImageRows(rows);
  }, []); // Removed the dependency array

  return (
    <div className="image-gallery-container"> {/* Add a CSS class for the container */}
      {imageRows.map((rowImages, rowIndex) => (
        <p className="image-row" key={rowIndex}>
          {rowImages.map((image, imageIndex) => (
            <img
              key={imageIndex}
              src={`/img/${image}`} // Use the "public/img" directory
              alt={`Image ${imageIndex + 1}`}
              className="image"
              loading="lazy" // Lazy loading attribute
            />
          ))}
        </p>
      ))}
    </div>
  );
}

export default ImageGallery;
