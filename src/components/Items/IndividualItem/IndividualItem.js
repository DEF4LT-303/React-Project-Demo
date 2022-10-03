import { useContext } from 'react';

import CartContext from '../../../Store/cart-context';
import classes from './IndividualItem.module.css';

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
        {/* <div className={classes['main-image']}>
          <img src={image} alt='{props.name}' />
        </div> */}
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/* <ItemForm id={props.id} onAddToCart={addToCartHandler} /> */}
      </div>
    </li>
  );
};

export default IndividualItem;
