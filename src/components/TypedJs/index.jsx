// // src/components/TextTyper.jsx
// import React, { useEffect, useRef } from 'react';
// import TypedJs from 'TextTyper';

// const TextTyper = () => {
//   const el = useRef(null);
//   const typed = useRef(null);

//   useEffect(() => {
//     typed.current = new Typed(el.current, {
//       strings: ['Hello World!', 'Welcome to React.', 'Typed.js in action!'],
//       typeSpeed: 50,
//       backSpeed: 25,
//       loop: true,
//     });

//     return () => {
//       // Destroy Typed instance during cleanup to prevent memory leaks
//       typed.current.destroy();
//     };
//   }, []);

//   return <span ref={el} />;
// };

// export default TextTyper;

// new code 👇

import React, { useEffect, useRef } from 'react';
// import TypedText from '../../components/TypedJs';
import Typed from 'typed.js';



const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Skilled Frontend Developer', 'Web Developer','Freelancer',
      ],
      typeSpeed: 130,
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
