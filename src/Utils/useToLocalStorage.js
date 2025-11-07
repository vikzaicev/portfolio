import { useState, useEffect } from "react";

const getToLocalStorage = (key, defaultValue) => {
  let valueData = localStorage.getItem(key);
  let valueToLocalStorage = JSON.parse(valueData);
  return valueToLocalStorage || defaultValue;
};

export const useToLocalStorage = (key, defaultValue) => {
  const [dark, setDark] = useState(() => {
    return getToLocalStorage(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(dark));
  }, [dark, key]);
  return [dark, setDark];
};
