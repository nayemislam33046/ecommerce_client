import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";
export const ThemeContext = createContext();
export const MyContext = ({ children }) => {
  const initialState = {
    product: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};