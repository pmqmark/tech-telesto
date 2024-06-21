import React, { useState, useEffect } from 'react';
import LayoutOne from '../Layout/LayoutOne';
import './OrdersOne.css';
import ordersImage from './Rectangle 76.png';

import instance from '../../../utils/axiosInstance';
import { baseURL } from '../../../utils/constant';



function OrdersOne() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [productDetails,setproductDetails]=useState([]);


  const fetchOrderDetails = () => {
    instance
      .get('admin/allorder')
      .then((response) => {
        setOrderDetails(response.data.order);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  

  const handleOrderCancel = async (_id) => {
    try {
      const response = await instance.patch(`/admin/order/cancelorder/${_id}`);
      console.log('Order Canceled', response.data.order);
  
      const updatedOrderDetails = orderDetails.map((order) => {
        if (order._id === _id) {
          return { ...order, cancelRequest: true };
        }
        return order;
      });
      setOrderDetails(updatedOrderDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductDetails =()=> {
    instance
      .get('admin/getallproducts')
      .then((res)=>{
        console.log("fetch product", res.data.products);
        setproductDetails(res.data.products)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    fetchOrderDetails();
    fetchProductDetails();
  },[])


  return (
    <div>
      <LayoutOne>
      {orderDetails.map((order, index) => (
        <div className='MappaddedOrders' >
          <div className='ordersMain'>
            <div className='OrdersHead'>
              <h1>Orders id : {index + 1}</h1>
            
            <div>
              
                <div className='OrdersContainer' key={order._id}>
                  <div className='OrdersTwo'>
                    <div>
                      <h2 className='h2OrdersMain'>Date</h2>
                      <p className='POrdersMain'>{order.date}</p>
                    </div>
                  </div>
                  <div className='OrdersThree'>
                    <div>
                      <select name="products" id="OrdersDrop">
                        <option className='dropdown-menu-Orders' value="Orders">Orders</option>
                        <option className='dropdown-menu-Orders' value="IotKit">Iot Kit</option>
                        <option className='dropdown-menu-Orders' value="3DPrinting">3D Printing</option>
                        <option className='dropdown-menu-Orders' value="Sensors">Sensors</option>
                      </select>
                      <p className='POrdersMain'>{order.orderStatus} </p>
                    </div>
                  </div>
                  <div className='OrdersFour'>
                    <div>
                      <h2 className='h2OrdersMain'>Customer</h2>
                      <p className='POrdersMain'>{order.fullName} - {order.email}</p>
                    </div>
                  </div>
                  <div className='OrdersFive'>
                    <div>
                      <button className='OrdersSpecificbutton  ' onClick={() => handleOrderCancel(order._id,index)} >{order.cancelRequest ? 'Cancelled' : 'Cancel'}</button>
                    </div>
                  </div>
                </div>
              
            </div>
            <div className='BottomRowOrders'>
            {productDetails.map((product) => {
                  if (product.title === order.productName) {
                    return (
                      <div className='bg-OrdersContainerBottom' key={product._id}>
                        <div className='OrdersContainerBottom '>
                          <div className='bottomOrders OrdersContainer'>
                            <div className='ordersOneBottom'>
                              <img src={`${baseURL}/${product.image}`} alt="order" />
                            </div>
                            <div className='OrdersTwoBottom'>
                              <div>
                                <h2 className='h2OrdersMainBottom'>{product.title}</h2>
                                <p className='POrdersMainBottom'>
                                  {product.rating} ({product.totalRating} reviews) Qty({order.qty})
                                </p>
                              </div>
                            </div>
                            <div className='OrdersThreeBottom'>
                              <div>
                                <h2 className='h2OrdersMainBottom' >Type</h2>
                                <p className='POrdersMainBottom'>proffesional</p>
                              </div>
                            </div>
                            <div className='OrdersFourBottom'>
                              <div>
                                <h2 className='h2OrdersMainBottom'>Control Range</h2>
                                <p className='POrdersMainBottom'>{product.visibility ? 'Visible' : 'Not Visible'}</p>
                              </div>
                            </div>
                            <div className='OrdersFiveBottom'>
                              <div>
                                <h2 className='h2OrdersMainBottom'>Sub total</h2>
                                <p className='POrdersMainBottom'>{product.realPrice}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              <div className='bg-priceDetailContainer'>
                <div className='PricedetilsContainer'>
                  {productDetails.map((product) => {
                    if (product.title === order.productName) {
                      return (
                      <div className='totalPrice' key={index}>
                        <h1>TOTAL</h1>
                        <h1>{product.realPrice}</h1>
                      </div>
                      );
                    }
                    return null;
                  })}  
                    <hr />
                  
                    <div >
                    {productDetails.map((product) => {
                  if (product.title === order.productName) {
                    return (
                      <div className='AddOnPrice'>
                        <div className='AddOnPriceOne'>
                          <p>Discount</p>
                          <p>Shipping</p>
                          <p>Tax</p>
                          <p>Subtotal</p>
                        </div>
                        <div className='AddOnPriceTwo'>
                          <p>{product.offer}%</p>
                          <p>Free</p>
                          <p>10</p>
                          <p>{product.offerPrice}</p>
                        </div>
                      </div>
                       );
                      }
                      return null;
                    })} 
                    </div>
                  
                  <hr />
                  
                    <div key={index}>
                      <h3 className='paidTextbottom'>{order.paystatus}</h3>
                    </div>
                  
                </div>
                <div className='OrderDetailsRight'>
                
                    <div key={index}>
                      <div className='OrdersAddress'>
                        <div>
                          <h4>Ordered by</h4>
                          <p>{order.fullName}, {order.city},{order.District},{order.State},{order.pin} (+91) {order.phoneNumber}</p>
                        </div>
                        <div>
                          <h4>Shipped to</h4>
                          <p>{order.fullName}, {order.city},{order.District},{order.State},{order.pin} (+91) {order.phoneNumber}</p>
                        </div>
                      </div>
                      <div>
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      ))}
      
      </LayoutOne>
    </div>
  );
}

export default OrdersOne;
