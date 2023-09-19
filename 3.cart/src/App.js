import "./App.css";
import data from "./Data";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const handleCart = (items) => {
    const presentinCart = cart.some((product) => product.id === items.id);
    if (presentinCart) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === items.id) {
          return {
            ...prod,
            quantity: prod.quantity + 1,
          };
        }
        return prod;
      });
      setCart(updatedCart);
    } else {
      setCart((prev) => {
        return [...prev, { ...items, quantity: 1 }];
      });
    }
  };
  return (
    <div className="App">
      {data.map((items) => {
        const { name, price, image, id } = items;
        return (
          <section className="list">
            <div className="listHeader " key={id}>
              <img src={image} alt={name} style={{ width: "20rem" }} />
            </div>
            <div className="footer">
              <h4>{name}</h4>
              <p>{price}</p>
            </div>
            <button onClick={() => handleCart(items)}>Add Cart</button>
          </section>
        );
      })}
      <div className="underLine"></div>
      <section className="cart">
        <h1>Items in Cart</h1>
        <h4>Total no. of Items:{cart.length}</h4>
        {cart.map((item) => {
          const { id, image, name, price, quantity } = item;
          return (
            <main className="cartList">
              <div className="cartImage" key={id}>
                <img src={image} alt={name} style={{ width: "20rem" }} />
              </div>
              <div className="cartFooter">
                <h3>{name}</h3>

                <p>Rs:{price}</p>

                <p>Qnt:{quantity}</p>
              </div>
            </main>
          );
        })}
      </section>
    </div>
  );
}

export default App;
