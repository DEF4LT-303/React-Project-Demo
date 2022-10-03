import { useContext } from 'react';

import CartContext from '../../../Store/cart-context';
import classes from './IndividualItem.module.css';
import ItemForm from './ItemForm';

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
    // <li className={classes.item}>
    <div className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes.form}>
          <ItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
      {/* <div>
        <ItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div> */}
    </div>
    // </li>
  );
};

export default IndividualItem;
