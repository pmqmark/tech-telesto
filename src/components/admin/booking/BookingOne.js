import React, { useState, useEffect } from 'react';
import LayoutOne from '../Layout/LayoutOne';
import Bookimage from './Rectangle 51.png';
import './BookingOne.css';
import { Link } from 'react-router-dom';
import instance from '../../../utils/axiosInstance';



function BookingOne() {
  const [bookings, setBookings] = useState([]);

  const fetchBlogsData = ()=>{
    instance.get('admin/booking')
      .then((response) => {
        // Handle the successful response here
        console.log(response)
        
        setBookings(response.data.booking); 
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  }
    
  useEffect(()=>{
    fetchBlogsData();
  }, []);

  const HandleBookingCancel = (_id, status) => {
    instance
      .patch(`/admin/updatebooking/${_id}`, { status })
      .then((bookingDelResponse) => {
        console.log(`Booking ${status} successfully`, bookingDelResponse.data.booking);

        // Remove the booking from the list by filtering out the declined booking
        // setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== _id));
        setBookings((prevBookings) =>
        prevBookings.map((booking) => {
          if (booking._id === _id) {
            return { ...booking, status };
          }
          return booking;
        })
      );
      })
      .catch((error) => {
        console.error(error);
      });
  }



  return (
    <div>
      <LayoutOne>
        <div>
          <div className='BookingHead'>
            <h1>Bookings</h1>
          </div>
          <div className='bookingContainerTwo'>
            <Link to='/admin/bookings' className='linkBooking'>
              Unscheduled
            </Link>
            <Link to='/admin/bookingscheduled' className='linkBooking'>
              Scheduled
            </Link>
          </div>
          <div className='bg-bookingCont'>
            {bookings.map((booking,status) => (
              <div className='BookingContainer' key={booking._id}>
                <div className='bookingImage'>
                  <img src={Bookimage} alt='' />
                </div>
                <div className='BookingTwo'>
                  <div>
                    <p>🕒{booking.status}</p>
                    <h2>{booking.fullName}</h2>
                    <p>{booking.phoneNumber}</p>
                  </div>
                </div>
                <div className='BookingThree'>
                  <div>
                    <p>1.{booking.bookingName}</p>
                  </div>
                </div>
                <div className='BookingThree'>
                  <div>
                    <p>{booking.date}</p>
                    <p>{booking.time}</p>
                  </div>
                </div>
                <div className='BookingFour'>
                  <div className='bgBookingfour'>
                    <button  onClick={() => HandleBookingCancel(booking._id, 'accepted')}  >{booking.status === 'accepted' ? 'Accepted' : 'Accept'}</button>
                    <br />
                    <button className='BookingSpecificbutton' onClick={() => HandleBookingCancel(booking._id, 'declined')} >{booking.status === 'declined' ? 'declined' : 'decline'}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutOne>
    </div>
  );
}

export default BookingOne;
