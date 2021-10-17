import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

//console.log(ThemeContext);

const ThemeContextProvider = props => {
  const [colors, setColors] = useState({
    bgColor: "orange",
    textColor: "#000"
  });

  //  console.log(props);

  return(
      <ThemeContext.Provider value={{...colors }}>
          {props.children}
      </ThemeContext.Provider>
  );
  };

export default ThemeContextProvider;