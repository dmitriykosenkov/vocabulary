import { useEffect, useState } from "react";

export function useUserTheme(initialValue) {
   const [theme, setTheme] = useState(initialValue);
   const userTheme = localStorage.getItem("theme-test");
   const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
   };
   useEffect(() => {
      if (userTheme) {
         setTheme(userTheme);
      }
   }, []);
   useEffect(() => {
      document.body.setAttribute("data-theme", theme);
      localStorage.setItem("theme-test", theme);
   }, [theme]);
   return { theme, toggleTheme };
}
