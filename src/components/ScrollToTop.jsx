import React, { useState, useEffect } from 'react';
const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 300);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    show && (
      <button
        onClick={scrollUp}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          padding: '10px 15px',
          fontSize: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
