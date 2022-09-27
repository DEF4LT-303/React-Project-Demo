import classes from './IndividualItem.module.css';

const IndividualItem = (props) => {

  const price = `TK. ${props.price.toFixed(2)}`;

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>

      </div>
    </li>);
};

export default IndividualItem;