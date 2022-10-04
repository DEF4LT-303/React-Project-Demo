// import classes from './Card.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemCard = (props) => {
  // return <div className={classes.card}>{props.children}</div>;

  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          maxHeight: '100%',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
          height: '350px'
        }}
      >
        <CardMedia component='img' height='200' image={props.img} alt='icon' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.name}
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            {props.description}
          </Typography>

          <Typography style={{}}>TK. {props.price}</Typography>
          {/* <Typography>Vertical Align Bottom</Typography> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemCard;
