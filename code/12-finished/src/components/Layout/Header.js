import { Fragment, useContext } from 'react';
import ThemeContext from '../../store/theme-context';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  const { currentTheme, changeTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    changeTheme(currentTheme == 'light' ? 'dark' : 'light');
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1 onClick={switchTheme}>ReactMeals({currentTheme})</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
