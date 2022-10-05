// import classes from './Card.module.css';
import { makeStyles } from '@material-ui/core';
import { CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    transition: 'transform 0.15s ease-in-out'
  },
  cardHovered: {
    transform: 'scale3d(1.05, 1.05, 1)'
  }
});

const ItemCard = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 1
  });

  const truncate = (str) => {
    return str.length > 60 ? str.substring(0, 60) + '...' : str;
  };

  return (
    <div>
      <Card
        className={classes.root}
        classes={{ root: state.raised ? classes.cardHovered : '' }}
        sx={{
          maxWidth: 345,
          maxHeight: '100%',
          height: '350px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)'
        }}
        onMouseOver={() => setState({ raised: true, shadow: 3 })}
        onMouseOut={() => setState({ raised: false, shadow: 1 })}
        raised={state.raised}
        zdepth={state.shadow}
      >
        <CardMedia component='img' height='200' image={props.img} alt='icon' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.name}
          </Typography>

          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              minHeight: '50px',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}
          >
            {truncate(props.description)}
          </Typography>

          <CardActions>
            <Typography style={{}}>TK. {props.price}</Typography>
          </CardActions>
          {/* <Typography>Vertical Align Bottom</Typography> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemCard;
