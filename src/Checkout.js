import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal"

function Checkout() {
  const [{ basket }] = useStateValue();
  console.log(basket.length);
  return (
    <div className="checkout">
      <img className="checkout_ad" src="" alt="" />

      {basket?.length === 0 ? (
        <div>
          <h2 className="checkout_header">Your Shopping basket is empty</h2>
          <p>
            The price and availability of items at Amazon.com are subject to
            change. The Cart is a temporary place to store a list of your items
            and reflects each item's most recent price. Shopping CartLearn more
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_header">Your Shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      <div>
        {basket?.length > 0 && (
          <div className="checkout_right">
            <Subtotal/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
