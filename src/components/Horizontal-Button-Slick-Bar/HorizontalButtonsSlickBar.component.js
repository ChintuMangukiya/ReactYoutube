import React, { useRef, useState, useEffect } from "react";
import "./HorizontalButtonsSlickBar.component.css";

const HorizontalButtonsSlickBar = () => {
    const scrollContainer = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
  
    const suggestions = [
      "All",
      "Music",
      "Gaming",
      "Live",
      "News",
      "Sports",
      "Movies",
      "Education",
      "Podcasts",
      "Fashion",
      "Comedy",
      "Technology",
      "Food",
      "Travel",
    ];
  
    const handleScroll = () => {
      if (!scrollContainer.current) return;
  
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
  
      // Check if at the start (hide left arrow)
      setShowLeftArrow(scrollLeft > 0);
  
      // Check if at the end (hide right arrow)
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    };
  
    const scrollLeft = () => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollBy({
          left: -200,
          behavior: "smooth",
        });
      }
    };
  
    const scrollRight = () => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollBy({
          left: 200,
          behavior: "smooth",
        });
      }
    };
  
    useEffect(() => {
      const container = scrollContainer.current;
  
      if (container) {
        // Attach the scroll event listener
        container.addEventListener("scroll", handleScroll);
  
        // Check initial state
        handleScroll();
  
        return () => {
          container.removeEventListener("scroll", handleScroll);
        };
      }
    }, []);
  
  return (
    <div className="horizontal-bar-wrapper">
      {showLeftArrow && (
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
      )}
      <div className="horizontal-bar" ref={scrollContainer}>
        {suggestions.map((item, index) => (
          <button key={index} className="suggestion-button">
            {item}
          </button>
        ))}
      </div>
      {showRightArrow && (
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default HorizontalButtonsSlickBar;
