import { useContext } from 'react';

import CartContext from '../../../Store/cart-context';
import classes from './IndividualItem.module.css';
import MealItemForm from './ItemForm';

const IndividualItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `TK. ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default IndividualItem;
