import { useState } from "react";
import './App.css';

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const nextSlide =() =>{
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }
  const prevSlide = ()  => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }
  return (
    <div>
      <h2>Project 1: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}
//App.css
// html,
// body {
//   font-family: Arial, Helvetica, sans-serif;
//   text-align: center;
// }

// .slider {
//   position: relative;
//   width: 100%;
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0;
//   padding: 0;
// }

// .slide {
//   min-width: 50%;
//   height: 60vh;
//   font-size: 50px;
// }

// img {
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
// }

// .left-arrow,
// .right-arrow {
//   position: absolute;
//   z-index: 1;
//   font-size: 20px;
//   top: 46%;
//   color: white;
//   background: black;
//   border-radius: 9999px;
//   padding: 4px 8px;
//   cursor: pointer;
//   user-select: none;
// }

// .left-arrow {
//   left: 5%;
// }
// .right-arrow {
//   right: 5%;
// }
