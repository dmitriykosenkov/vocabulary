import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import s from "./Form.module.scss";

const createWordItem = (en, ukr) => {
   return {
      id: uuidv4(),
      en,
      ukr,
   };
};
const Form = ({ list, setList, valueEn, setValueEn }) => {
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
         <button
         className={s.formBtn}
            type="submit"
            // value="Save the pare"
            disabled={!valueUkr}
            onClick={() => handleSubmit(valueEn, valueUkr)}
         >Save the pare</button>
      </div>
   );
};
export default Form;
