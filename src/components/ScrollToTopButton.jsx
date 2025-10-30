import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 700, smooth: true });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition duration-300"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
