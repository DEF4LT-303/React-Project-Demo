// import classes from './Card.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import steam from '../../assets/steam.png';

const ItemCard = (props) => {
  // return <div className={classes.card}>{props.children}</div>;

  console.log(props.children);
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
          height: '100%'
        }}
      >
        <CardMedia
          component='img'
          height='200'
          image={steam}
          alt='$5 steam card'
        />
        <CardContent>
          {/* <Typography gutterBottom variant='h5' component='div'> */}
          {/* {props.children} */}
          {/* </Typography> */}
          <Typography variant='body2' color='text.secondary'>
            {props.children}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemCard;
