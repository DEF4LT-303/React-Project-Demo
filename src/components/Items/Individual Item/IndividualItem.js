import classes from './IndividualItem.module.css';
import ItemForm from './ItemForm';

const IndividualItem = (props) => {

  const price = `TK. ${props.price.toFixed(2)}`;

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ItemForm />
      </div>
    </li>);
};

export default IndividualItem;