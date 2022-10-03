// import classes from './Card.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import steam from '../../assets/steam.png';

const ItemCard = (props) => {
  // return <div className={classes.card}>{props.children}</div>;

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='140'
          image={steam}
          alt='$5 steam card'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {/* {props.title} */}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.children}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemCard;
