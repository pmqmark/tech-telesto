import React,{useState,useEffect} from 'react'
import LayoutOne from '../Layout/LayoutOne'
import Bookimage from './Rectangle 53.png'
import './BookingOne.css'
import { Link } from 'react-router-dom'
import instance from '../../../utils/axiosInstance'



function BookingTwo() {

  const [confirmedUsers, setConfirmedUsers] = useState([]);

  const fetchConfirmedUsers = () => {
    instance.get('admin/booking') // Replace with your actual endpoint
      .then((response) => {
        // Filter users with status "accepted"
        const acceptedUsers = response.data.booking.filter(user => user.status === 'accepted');
        setConfirmedUsers(acceptedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchConfirmedUsers();
  }, []);


  return (
    <div>
        <LayoutOne>
            <div>
              <div className='BookingHead'>
                <h1>Bookings  scheduled</h1>
              </div>
              <div className='bookingContainerTwo'>
                <Link to='/admin/bookings' className='linkBooking'>Unscheduled</Link>
                <Link to='/admin/bookingsheduled' className='linkBooking'>scheduled</Link>
              </div>
              <div className='bg-bookingCont'>
              {confirmedUsers.map((user) => (
                <div className='BookingContainer' key={user._id}>
                  <div className='bookingImage'>
                    <img src={Bookimage} alt="" />
                  </div>
                  <div className='BookingTwo'>
                    <div>
                      <p className='greenConfirmed' >✅Confirmed </p>
                      <h2>{user.fullName}</h2>
                    </div>
                  </div>
                  <div className='BookingThree'>
                    <div>
                      <p>1. Workshop</p>
                    </div>
                  </div>
                  <div className='BookingThree'>
                    <div>
                      <p>{user.date}</p>
                      <p>{user.time}</p>
                    </div>
                  </div>
                  <div className='BookingFour'>
                    <div>
                      <button>Confirmed</button>
                    </div>
                  </div>
                </div>
              ))}
                  
              </div>
            </div>
        </LayoutOne>
    </div>
  )
}

export default BookingTwo