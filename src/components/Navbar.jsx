import { NavLink } from "react-router-dom";
import s from "../App.module.css";

const Navbar = () => {
   return <div className={s.navbar}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/list"}>List</NavLink>
   </div>;
};
export default Navbar;
