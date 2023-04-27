
import { Link } from "react-router-dom";
import "../styles/carousel.css";
import React, { useState, useEffect, useRef } from "react";
const Carousel = ({ items, rotationInterval = 3000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);
  
    const rotateCarousel = () => {
      if (!isInteracting) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    };
  
    const rotationTimer = useRef(null);
  
    useEffect(() => {
      rotationTimer.current = setInterval(rotateCarousel, rotationInterval);
      return () => clearInterval(rotationTimer.current);
    }, [isInteracting]);
  
    useEffect(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    }, [containerRef]);
  
    return (
      <div
        ref={containerRef}
        className="carousel-container"
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
      >
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{
                transform: `translateX(${(index - activeIndex) * (containerWidth + 10)}px)`,
                transition: isInteracting ? "none" : "transform 0.5s ease",
              }}
            >
              <a href={item.link}>
                <img src={item.image} alt={item.title} />
                <div className="carousel-text">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;