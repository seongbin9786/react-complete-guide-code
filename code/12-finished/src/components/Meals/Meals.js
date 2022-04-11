import { Fragment, useContext } from 'react';
import ThemeContext from '../../store/theme-context';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      <MealsSummary theme={currentTheme} />
      <AvailableMeals theme={currentTheme} />
    </Fragment>
  );
};

export default Meals;
