import { useState, useEffect } from "react";
import "./Commerce.css"

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      {showButton && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
        {/* <p onClick={scrollToTop}> */}
          ⬆ 
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
