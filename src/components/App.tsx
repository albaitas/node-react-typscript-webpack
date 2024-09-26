import React from 'react';
import myImage from '../assets/images/dog.png';

const App: React.FC = () => {
  return (
    <>
      <h2>Hello from TypeScript React App!</h2>;
      <img src={myImage} alt="Description of the image" />
    </>
  );
};

export default App;
