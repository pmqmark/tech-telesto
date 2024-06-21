import React,{useState,useEffect} from 'react'
import LayoutOne from '../Layout/LayoutOne'
import './Dashboard.css'
import instance from '../../../utils/axiosInstance';



function DashboardOne() {

  

    const [categoryCount, setCategoryCount] = useState([]);
    const [productCount,setProductCount]=useState([])
    const [bookingCount, setbookingCount] = useState([]);
    const [blogsCount, setblogsCount] = useState([]);
    const [ordersCount, setordersCount] = useState([]);

    useEffect(() => {
        
        instance.get('/admin/getcategories')
          .then(response => {
            
            setCategoryCount(response.data.category);
          })
          .catch(error => {
            console.error('Error fetching data from the backend:', error);
          });
    }, []);

    const totalCategoryCount = categoryCount.length;

    useEffect(() => {
        
        instance.get('/admin/getallproducts')
          .then(response => {
            
            setProductCount(response.data.products);
          })
          .catch(error => {
            console.error('Error fetching data from the backend:', error);
          });
    }, []);

    const totalproductCount = productCount.length;

    useEffect(() => {
        
        instance.get('/admin/booking')
          .then(response => {
            
            setbookingCount(response.data.booking);
          })
          .catch(error => {
            console.error('Error fetching data from the backend:', error);
          });
    }, []);

    const totalbookingCount = bookingCount.length;

    useEffect(() => {
        
        instance.get('/admin/blogs')
          .then(response => {
            
            setblogsCount(response.data.blogs);
          })
          .catch(error => {
            console.error('Error fetching data from the backend:', error);
          });
    }, []);

    const totalblogsCount = blogsCount.length;

    useEffect(() => {
        
        instance.get('/admin/allorder')
          .then(response => {
            
            setordersCount(response.data.order);
          })
          .catch(error => {
            console.error('Error fetching data from the backend:', error);
          });
    }, []);

    const totalordersCount = ordersCount.length;

  return (

    <LayoutOne>
        <div>
            <div>
                <div className='AdminDashHead' >
                    <h1>Welcome to the dashboard! </h1>
                </div>
                <div  >
                    <div className='MainItemAdmin' >
                        <div className='dashBoardCard'>
                            <h1>No of Categories</h1>
                            <p>Total : {totalCategoryCount}</p>
                        </div>
                        <div className='dashBoardCard'>
                            <h1>No of products</h1>
                            <p>Total : {totalproductCount}</p>
                        </div>
                        <div className='dashBoardCard'>
                            <h1>No of booking</h1>
                            <p>Total : {totalbookingCount}</p>
                        </div>
                        <div className='dashBoardCard'>
                            <h1>No of blogs</h1>
                            <p>Total :  {totalblogsCount} </p>
                        </div>
                        <div className='dashBoardCard'>
                            <h1>No of Orders</h1>
                            <p>Total : {totalordersCount} </p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </LayoutOne>
  )
}

export default DashboardOne