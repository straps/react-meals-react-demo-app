import { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountRef = useRef();

  const onFormSubmit = (event) => {
    props.onAdd(+amountRef.current.value);
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
