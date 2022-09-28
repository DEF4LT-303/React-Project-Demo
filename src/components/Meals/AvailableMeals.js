import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import IndividualItem from './IndividualItem/IndividualItem';

const DUMMY_ITEMS = [
  {
    id: 'm1',
    name: '$1 Steam Wallet Card',
    description: 'Redeem code for $1 Steam Wallet Card',
    price: 110
  },
  {
    id: 'm2',
    name: '$5 Steam Wallet Card',
    description: 'Redeem code for $5 Steam Wallet Card',
    price: 520
  },
  {
    id: 'm3',
    name: '69 Genesis Crystals',
    description: 'Become a damn whale 🐋',
    price: 6969
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_ITEMS.map((meal) => (
    <IndividualItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
