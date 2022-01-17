import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartTotal, removeFromCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const cartItems = useSelector((state) => state?.cart.cartItems);
  const dispatch = useDispatch()
  const handleAddToCart =product=>{
    dispatch(addToCart(product))
    dispatch(cartTotal());
  }
  const handleRemoveFromCart=(cartItem)=>{
    dispatch(removeFromCart(cartItem))
    dispatch(cartTotal());
  }
  const isInCart = (product) => cartItems.find(cartItem=>cartItem.id===product.id)

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading..</p>
      ) : error ? (
        <p>Something went wrong</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">₹{product.price}</span>
                </div>
                {
                isInCart(product) ? <button className='removeFromCart' onClick={()=>handleRemoveFromCart(product)}>Remove From Cart</button>
                : <button className='addToCart  ' onClick={()=>handleAddToCart(product)}>Add To Cart</button> 
                }
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
