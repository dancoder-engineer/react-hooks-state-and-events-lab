import React, {useState} from "react";
import Item from "./Item";



function ShoppingList({ items }) {

  let [itemList, setItemList] = useState([...items])
  console.log(items)
  function handleChange(){
    setItemList([...items])
    if (document.querySelector("select").value !== "All")   { setItemList(itemList => (itemList.filter(i => i.category === document.querySelector("select").value ))) }
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
        
        }
      </ul>
    </div>
  );
}

export default ShoppingList;
