import { useOutletContext } from "react-router";
import WordItem from "./WordItem/WordItem";

const WordsList = () => {
   const [list, deleteItem, valueEn, editItem] = useOutletContext();
   return (
      <ul>
         {list.length > 0 ? (
            list
            .filter(item => {
               return valueEn.toLowerCase() === '' ? item : item.en.toLowerCase().includes(valueEn)
            })
            .reverse()
            .map((item) => (
               <WordItem key={item.id} item={item} deleteItem={deleteItem} editItem={editItem}/>
            ))
         ) : (
            <div>There is no words here</div>
         )}
      </ul>
   );
};
export default WordsList;
