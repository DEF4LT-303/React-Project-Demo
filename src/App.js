import { useState } from 'react';

import { Helmet } from 'react-helmet';
import Cart from './components/Cart/Cart';
import Slideshow from './components/DisplaySlider/SlideShow';
import AvailableItems from './components/Items/AvailableItems';
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
        <style>{'body { background-color: #d8d8d8; }'}</style>
      </Helmet>

      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Items />
        <Slideshow />
        <AvailableItems />
      </main>
    </CartProvider>
  );
}

export default App;
