import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = props => {
    // const price = `$${props.price.toFixed(2)}`
    const cartContext = useContext(CartContext)

    const addToCartHandler = (amount)=> {
      cartContext.addItem({
        id:props.id,
        name:props.name,
        amount: amount,
        price: props.price,
      })
    }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{props.price}</p>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
