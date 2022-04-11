import { useContext, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import ThemeContext from './store/theme-context';

function App() {
  const { currentTheme } = useContext(ThemeContext);

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const backgroundColor = currentTheme == 'light' ? '#eee' : '#222';

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main style={{ backgroundColor }}>
        <Meals />
      </main>
    </div>
  );
}

export default App;
