import { useState } from "react";
import s from "./WordItem.module.scss";

const WordItem = ({ item, deleteItem, editItem }) => {
   const [editedValueEn, setEditedValueEn] = useState(item.en);
   const [editedValueUkr, setEditedValueUkr] = useState(item.ukr);
   const [editMode, setEditMode] = useState(false);
   
   const editWord = () => {
      editItem({...item, en: editedValueEn, ukr: editedValueUkr})
      setEditMode(false)
   }

   return (
      <li key={item.id} className={s.bodyItem}>
         {!editMode ? (
            <div className={s.bodyInner}>
               <div className={s.lessonNumber}>{item.lesson}</div>
               <div className={s.textItem}>
                  <span>{item.en}</span> - {item.ukr}
               </div>
               <div className={s.actions}>
                  <button className={s.buttonItem} onClick={() => setEditMode(true)}>Edit</button>
                  <button
                     className={s.buttonItem}
                     onClick={() => deleteItem(item.id)}
                  >
                     Delete
                  </button>
               </div >
            </div>
         ) : (
            <div className={s.editMode}>
               <input
                  className={s.editInput}
                  value={editedValueEn}
                  type="text"
                  placeholder="Edit word in English..."
                  onChange={(e) => setEditedValueEn(e.target.value)}
               />
               <input
                  className={s.editInput}
                  value={editedValueUkr}
                  type="text"
                  placeholder="Edit word in Ukrainian..."
                  onChange={(e) => setEditedValueUkr(e.target.value)}
               />
               <button className={s.buttonItem} onClick={editWord}>Save</button>
            </div>
         )}
      </li>
   );
};
export default WordItem;
