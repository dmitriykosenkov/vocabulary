import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./Form.module.scss";

const createWordItem = (en, ukr, lesson = 0) => {
   return {
      id: uuidv4(),
      en,
      ukr,
      lesson,
   };
};
const Form = ({ list, setList, valueEn, setValueEn }) => {
   const [valueUkr, setValueUkr] = useState("");
   const [lessonNumber, setLessonNumber] = useState(0);

   const handleSubmit = (en, ukr) => {
      const newWord = createWordItem(en, ukr, lessonNumber);
      setList([...list, newWord]);
      localStorage.setItem("vocabluary", JSON.stringify([...list, newWord]));
      setValueEn("");
      setValueUkr("");
   };
   return (
      <div className={s.formBody}>
         <input
            id="num"
            type="number"
            value={lessonNumber === 0 ? null : lessonNumber}
            placeholder="Lesson number"
            onChange={(e) => setLessonNumber(e.target.value)}
         />
         <div className={s.formItem}>
            <input
               className={s.formInput}
               value={valueEn}
               type="text"
               placeholder="Enter the word in English..."
               onChange={(e) => setValueEn(e.target.value)}
            />
         </div>
         <div className={s.formItem}>
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
            disabled={!valueUkr}
            onClick={() => handleSubmit(valueEn, valueUkr)}
         >
            Save the pare
         </button>
      </div>
   );
};
export default Form;
