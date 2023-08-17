import {useRef, useState} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = props => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true)
  const submitFormHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    console.log(enteredAmount)
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!amountIsValid  && <p>Please enter a valid amount (1-5)</p>}
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
