import Grid from '@material-ui/core/Grid';
import { Container } from 'react-bootstrap';
import ItemCard from '../UI/ItemCard';
import classes from './AvailableItems.module.css';
import IndividualItem from './IndividualItem/IndividualItem';

const DUMMY_ITEMS = [
  {
    id: 'm1',
    name: '$5 steam wallet',
    description: 'Redeem code for $5 Steam Wallet Card',
    price: 520
  },
  {
    id: 'm4',
    name: '$100 steam wallet',
    description: 'Redeem code for $100 Steam Wallet Card',
    price: 10800
  },
  // {
  //   id: 'm3',
  //   name: '69 Genesis Crystals',
  //   description: 'Become a damn whale 🐋',
  //   price: 6969
  // },
  {
    id: 'm3',
    name: '$50 steam wallet',
    description: 'Redeem code for $50 Steam Wallet Card',
    price: 5200
  },
  {
    id: 'm5',
    name: '$1 steam wallet',
    description: 'Redeem code for $10 Steam Wallet Card',
    price: 120
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

  return (
    <Container className={classes.items}>
      <Grid
        container
        spacing={3}
        direction='row'
        alignItems='center'
        justify='center'
      >
        {itemsList.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <ItemCard>{item}</ItemCard>
            {/* <ItemCard name={item.name} description={item.description} /> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableItems;
