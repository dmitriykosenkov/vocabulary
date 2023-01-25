import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import s from "./root.module.scss";
import Form from "../components/Form/Form";

export const Root = () => {
   const [list, setList] = useState([]);
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
                        List
                     </NavLink>
               </ul>
            </nav>
            <div className={s.form}>
               <Form list={list} setList={setList} />
            </div>
            <div className={s.body}>
               <Outlet context={[list, deleteItem]} />
            </div>
         </div>
      </div>
   );
};
