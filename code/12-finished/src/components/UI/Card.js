import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.card + ' ' + classes[props.theme]}>
      {props.children}
    </div>
  );
};

export default Card;
