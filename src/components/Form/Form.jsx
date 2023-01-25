import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import s from "./Form.module.scss";

const createWordItem = (en, ukr) => {
   return {
      id: new Date(),
      en,
      ukr,
   };
};
const Form = ({ list, setList }) => {
   const [valueEn, setValueEn] = useState("");
   const [valueUkr, setValueUkr] = useState("");

   const handleSubmit = (en, ukr) => {
      const newWord = createWordItem(en, ukr);
      setList([...list, newWord]);
      localStorage.setItem("vocabluary", JSON.stringify([...list, newWord]));
      setValueEn("");
      setValueUkr("");
   };
   return (
      <div className={s.formBody}>
         <div className={s.formItem}>
            <input
               className={s.formInput}
               value={valueEn}
               type="text"
               placeholder="Enter word in English..."
               onChange={(e) => setValueEn(e.target.value)}
            />
         </div>
         <div  className={s.formItem}>
            <input
               className={s.formInput}
               disabled={!valueEn}
               value={valueUkr}
               type="text"
               placeholder="Переклад..."
               onChange={(e) => setValueUkr(e.target.value)}
            />
         </div>
         <input
         className={s.formBtn}
            type="submit"
            value="Submit"
            disabled={!valueUkr}
            onClick={() => handleSubmit(valueEn, valueUkr)}
         />
      </div>
   );
};
export default Form;
