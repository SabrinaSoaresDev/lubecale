import { useCallback, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Builder from './components/Builder';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const scrollTo = useCallback((hash) => {
    if (hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const addToCart = useCallback((item) => {
    setCart((c) => [...c, { ...item, id: Date.now() + Math.random() }]);
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback(
    (id) => setCart((c) => c.filter((i) => i.id !== id)),
    []
  );

  const clearCart = useCallback(() => setCart([]), []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-cream">
        <Navbar
          cartCount={cart.length}
          onCartOpen={() => setCartOpen(true)}
          onNavigate={scrollTo}
        />
        <main>
          <Hero onNavigate={scrollTo} />
          <Marquee />
          <About />
          <Builder onAdd={addToCart} />
        </main>
        <Footer onNavigate={scrollTo} />
        <CartDrawer
          open={cartOpen}
          items={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onClear={clearCart}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;