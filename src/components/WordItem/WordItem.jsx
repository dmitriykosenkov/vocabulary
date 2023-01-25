import s from "./WordItem.module.scss"


const WordItem = ({item, deleteItem}) => {
   return (
      <li key={item.id} className={s.bodyItem}>
         <div className={s.textItem}>
            {item.en} - {item.ukr}
         </div>
         <button className={s.buttonItem}>Edit</button>
         <button className={s.buttonItem} onClick={() => deleteItem(item.id)}>Delete</button>
      </li>
   );
};
export default WordItem;
