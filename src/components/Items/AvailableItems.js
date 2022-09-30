import Card from '../UI/Card';
import classes from './AvailableItems.module.css';
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

const AvailableItems = () => {
  const itemsList = DUMMY_ITEMS.map((item) => (
    <IndividualItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return itemsList.map((item) => (
    <section className={classes.items}>
      <Card>
        <ul>{item}</ul>
      </Card>
    </section>
  ));
};

export default AvailableItems;
