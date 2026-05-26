import { useState } from 'react';
import { CartContext } from './contexts/CartContext';
import { useContext } from 'react';

export default function App() {
  const [carts, setCarts] = useState([
    { id: 1, quantity: 2 },
    { id: 2, quantity: 5 }
  ]);

  // const store = {
  //   carts,
  //   setCarts
  // };

  return (
    // 2. PASS VALUE IN a store and PROVIDE VALUE to descendant component
    // <CartContext value={store}>
    <CartContext
      value={{
        carts,
        setCarts
      }}
    >
      <Header />
      <Main />
    </CartContext>
  );
}

function Header() {
  return <h1>Total product in a cart: HARD_CODE</h1>;
}
function Main() {
  return <CartList />;
}
function CartList() {
  // 3. READ value from a store
  const ctx = useContext(CartContext);
  return (
    <>
      {ctx.carts.map((cart) => (
        <CartItem key={cart.id} {...cart} />
        // id=1, quantity=2
      ))}
    </>
  );
}
function CartItem(props) {
  const ctx = useContext(CartContext);

  return (
    <div className="border p-4">
      <h2>ID: {props.id}</h2>
      <div className="flex gap-4">
        <button
          onClick={() => {
            ctx.setCarts((prev) =>
              prev.map((el) =>
                el.id === props.id && el.quantity > 0
                  ? { ...el, quantity: el.quantity - 1 }
                  : el
              )
            );
          }}
        >
          -
        </button>
        <span>{props.quantity}</span>
        <button
          onClick={() => {
            ctx.setCarts((prev) =>
              prev.map((el) =>
                el.id === props.id ? { ...el, quantity: el.quantity + 1 } : el
              )
            );
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
