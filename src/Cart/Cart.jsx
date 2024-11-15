import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../Context/Context'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {state,dispatch} = useContext(ThemeContext)
    const [subtotals, setSubtotal] = useState(0);

    const { subtotal, totalQuantity } = state.product.reduce(
      (acc, item) => {
        acc.subtotal += item.price * item.qty;
        acc.totalQuantity += item.qty;
        return acc;
      },
      { subtotal: 0, totalQuantity: 0 }
    );
    useEffect(() => {
      setSubtotal(subtotal);
    }, [subtotal]);

    const number = subtotals+120;
    const formattedNumber = number.toLocaleString('en-US');

  return (
    <div>
      <div className='flex items-center m-5'>
              <Link to={"/"} className='text-blue-500'>/Home</Link>  
              <p>/addtocart</p>  
            </div>
        {state.product.length>0 ? (
            <div>
              {state.product.map((cart)=>{
              const thePrice = cart.price * cart.qty;
              const formattedNumber = thePrice.toLocaleString('en-US');
           
                return <div className='flex items-start justify-center mt-5' key={cart.id}>
                  <div className='flex items-center justify-between gap-10 w-[500px] bg-gray-300 p-2 rounded'>
                      <img src={cart.images[0]} alt={cart.name} className='w-16 h-16 md:w-20 rounded-full '/>
                      <div>
                        <p className='font-bold'>{cart.name}</p>
                        <p className='text-sm'>{cart.category}</p> 
                      </div>
                      <p>{formattedNumber} TK</p>
                      <div className='flex items-center'>
                        <button className='w-5 border disabled:bg-gray-600 disabled:text-white' onClick={()=>dispatch({type:"DECREMENT",payload:{id:cart.id,qty:cart.qty-1}})} disabled={cart.qty<=1?true:false}>-</button>
                        <p className='w-5 border text-center'>{cart.qty}</p>
                        <button className='w-5 border disabled:bg-gray-600 disabled:text-white' onClick={()=>dispatch({type:"INCREMENT",payload:{id:cart.id,qty:cart.qty+1}})} disabled={cart.qty>=5?true:false}>+</button>
                      </div>
                  </div>
                </div>
              })}
              <div className='flex items-end justify-center m-20 flex-col mt-2'>
                <div className='bg-orange-500 p-5 rounded text-white'>
                <p className='text-sm'>Delivery Charge: 120 TK</p>
                <p className='text-2xl'>Total : {formattedNumber} TK</p>
                </div>
              </div>
            </div>
        ):(
          <div className='flex justify-center items-center h-[80vh]'>
               <p className='text-3xl lg:text-4xl'>Cart Not Found</p>
          </div>
        )}
    </div>
  )
}

export default Cart