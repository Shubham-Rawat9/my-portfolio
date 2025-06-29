
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Frontend Developer', 'Web Developer','Freelancer',
      ],
      typeSpeed: 125,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
};

export default TypedText;
