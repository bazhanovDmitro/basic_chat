import { useState, useEffect } from "react";

const getValueFromLocalStorage = (key, initValue) => {
  const value = localStorage.getItem(key);

  if (value) return value;
  return initValue;
};

export default function useLocalStorage(key, initText) {
  const [text, setText] = useState(getValueFromLocalStorage(key, initText));

  useEffect(() => {
    const value = localStorage.getItem(key);
    setText(value ? value : initText);
  }, [key, initText]);

  useEffect(() => {
    localStorage.setItem(key, text);
  }, [text, key]);

  return [text, setText];
}
