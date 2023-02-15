import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from "./root.module.scss";
import Form from "../components/Form/Form";
import { useUserTheme } from "../hooks/useUserThemeHook";
import sunLogo from "../assets/sun.svg";
import moonLogo from "../assets/moon.svg";

export const Root = () => {
   const [list, setList] = useState([]);
   const { theme, toggleTheme } = useUserTheme("light");
   const [valueEn, setValueEn] = useState("");

   const editItem = (editedItem) => {
      const editedList = list.map((item) => {
         return item.id === editedItem.id ? editedItem : item;
      });
      localStorage.setItem("vocabluary", JSON.stringify(editedList));
      setList(editedList)
   };

   const deleteItem = (id) => {
      const vocabluary = localStorage.getItem("vocabluary");
      const newVoc = JSON.parse(vocabluary).filter((item) => item.id !== id);
      localStorage.setItem("vocabluary", JSON.stringify(newVoc));
      setList(newVoc);
   };

   useEffect(() => {
      if (localStorage.getItem("vocabluary")) {
         const vocabluary = localStorage.getItem("vocabluary");
         return setList(JSON.parse(vocabluary));
      }
      localStorage.setItem("vocabluary", JSON.stringify([]));
   }, []);

   return (
      <div className={s.wrapper}>
         <div className={s.container}>
            <nav className={s.navbar}>
               <ul className={s.navbarList}>
                  <NavLink
                     to={`/`}
                     className={({ isActive, pending }) =>
                        isActive ? s.navbarItemActive : s.navbarItem
                     }
                  >
                     Home
                  </NavLink>
                  <NavLink
                     to={`list`}
                     className={({ isActive, pending }) =>
                        isActive ? s.navbarItemActive : s.navbarItem
                     }
                  >
                     Word list
                  </NavLink>

                  <button className={s.themeBtn} onClick={toggleTheme}>
                     {theme === "light" ? (
                        <img src={moonLogo} alt="moon" />
                     ) : (
                        <img src={sunLogo} alt="sun" />
                     )}
                  </button>
               </ul>
            </nav>
            <div className={s.form}>
               <Form
                  list={list}
                  setList={setList}
                  valueEn={valueEn}
                  setValueEn={setValueEn}
               />
            </div>
            <div className={s.body}>
               <Outlet context={[list, deleteItem, valueEn, editItem]} />
            </div>
         </div>
      </div>
   );
};
