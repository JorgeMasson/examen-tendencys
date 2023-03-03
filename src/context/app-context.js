import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useAppState = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    try {
      const initialOrder = JSON.parse(localStorage.getItem("@order"));
      setOrder([...initialOrder]);
    } catch (e) {}
  }, []);

  return {
    order,
    setOrder: (item) => {
      localStorage.setItem("@order", JSON.stringify(item));
      setOrder([...order, item]);
    },
  };
};

export const AppProvider = ({ children }) => {
  const { order, setOrder } = useAppState();

  return (
    <AppContext.Provider value={{ order, setOrder }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
