import { useOutletContext } from "react-router";
import WordItem from "./WordItem/WordItem";

const WordsList = () => {
   const [list, deleteItem] = useOutletContext();
   return (
      <ul>
         {list.length > 0 ? (
            list.map((item) => (
               <WordItem item={item} deleteItem={deleteItem} />
            ))
         ) : (
            <div>There is no words here</div>
         )}
      </ul>
   );
};
export default WordsList;
