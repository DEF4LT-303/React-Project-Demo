import Grid from '@material-ui/core/Grid';
import { Container } from 'react-bootstrap';
import ItemCard from '../UI/ItemCardDisplay';
import classes from './AvailableItems.module.css';
import IndividualItem from './IndividualItem/IndividualItem';

const DUMMY_ITEMS = [
  {
    id: 'm1',
    name: '$5 steam wallet',
    description: 'Redeem code for $5 Steam Wallet Card',
    price: 520,
    img: 'https://cdn-products.eneba.com/resized-products/aszG3YhAYAzn3vJwFoq0ACh-DxOOeiLMhLAVuHFVU8I_350x200_1x-0.jpeg'
  },
  {
    id: 'm4',
    name: '$100 steam wallet',
    description: 'Redeem code for $100 Steam Wallet Card',
    price: 10800,
    img: 'https://media.karousell.com/media/photos/products/2022/8/23/steam_wallet_gift_card_100_sgd_1661228440_d9cf35b5.jpg'
  },
  {
    id: 'm3',
    name: 'Genesis Crystals',
    description: 'Become a damn whale 🐋',
    price: 6000,
    img: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/SG/en/99/EP6261-PPSA02584_00-YSPS4VC6THTIER60/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
  },
  {
    id: 'm3',
    name: '$50 steam wallet',
    description: 'Redeem code for $50 Steam Wallet Card',
    price: 5200,
    img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6577/6577073_sa.jpg;maxHeight=640;maxWidth=550'
  }
  // {
  //   id: 'm3',
  //   name: '$50 steam wallet',
  //   description: 'Redeem code for $50 Steam Wallet Card',
  //   price: 5200,
  //   img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6577/6577073_sa.jpg;maxHeight=640;maxWidth=550'
  // },
  // {
  //   id: 'm3',
  //   name: '$50 steam wallet',
  //   description: 'Redeem code for $50 Steam Wallet Card',
  //   price: 5200,
  //   img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6577/6577073_sa.jpg;maxHeight=640;maxWidth=550'
  // }
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

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  console.log(itemsList);

  return (
    // <Slider {...sliderSettings}>
    <Container className={classes.items}>
      <Grid
        container
        spacing={3}
        direction='row'
        alignItems='center'
        justify='center'
      >
        {DUMMY_ITEMS.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              img={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
    // </Slider>
  );
};

export default AvailableItems;
