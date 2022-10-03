import Grid from '@material-ui/core/Grid';
import { Container } from 'react-bootstrap';
import ItemCard from '../UI/ItemCard';
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

  // return itemsList.map((item) => (
  //   <Container className={classes.items}>
  //     <Card>
  //       <ul>{item}</ul>
  //     </Card>
  //   </Container>
  // ));

  return (
    <Container className={classes.items}>
      <Grid container spacing={3}>
        {itemsList.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            {/* <ItemCard>{item}</ItemCard> */}
            <ItemCard>{item}</ItemCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableItems;
