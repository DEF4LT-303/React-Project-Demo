import { useState } from 'react';

import { Helmet } from 'react-helmet';
import Cart from './components/Cart/Cart';
import Items from './components/Items/Items';
import Header from './components/Layout/Header';
import CartProvider from './Store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Helmet>
        <meta charSet='utf-8' />
        <title>My Game Shop</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta name='A simple demo site' content='Nested component' />
      </Helmet>

      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Items />
      </main>
    </CartProvider>
  );
}

export default App;
