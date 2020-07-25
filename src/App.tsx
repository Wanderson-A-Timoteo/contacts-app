import React from 'react';


const App = () => {
  return (
    <>
      <Styles />
    </>
  );
};

const Styles = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
  }
`;

export default App;
