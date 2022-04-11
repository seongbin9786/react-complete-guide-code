import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import CartProvider from './store/CartProvider';
import ThemeProvider from './store/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>,
);
