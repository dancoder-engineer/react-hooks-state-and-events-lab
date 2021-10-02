import React, {useState} from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState(false)

  function handleClick(){
    setInCart(inCart => !inCart)
    console.log(inCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={ inCart ?  "in-cart" : "add" } onClick={handleClick}>{ inCart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
