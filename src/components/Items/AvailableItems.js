import Card from '../UI/Card';
import classes from './AvailableItems.module.css';
import IndividualItem from './Individual Item/IndividualItem';

const DUMMY_ITEMS = [
  {
    id: 'm1',
    name: '$1 Steam Wallet Card',
    description: 'Redeem code for $1 Steam Wallet Card',
    price: 110,
  },
  {
    id: 'm2',
    name: '$5 Steam Wallet Card',
    description: 'Redeem code for $5 Steam Wallet Card',
    price: 520,
  },
  {
    id: 'm3',
    name: '$10 Steam Wallet Card',
    description: 'Redeem code for $10 Steam Wallet Card',
    price: 1030,
  },
];

const AvailableItems = () => {
  const itemList = DUMMY_ITEMS.map(item => <IndividualItem 
    key={item.id} 
    name={item.name} 
    description={item.description} 
    price={item.price} />
    );

  return (
    <section className={classes.items}>
      <Card>
        {itemList}
      </Card>
    </section>
  );
};

export default AvailableItems;