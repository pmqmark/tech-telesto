import axios from "../../../utils/axiosInstance";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { createBooking } from "../../../utils/constant";
import { toast } from "react-toastify";
import ScrollToTop from "../../../pages/user/ScrollToTop";

const BookingCard = () => {
  const [currentBooking, setCurrentBooking] = useState("");
  const [openModal, setOpenModal] = useState(false);
  
  const [data, setData] = useState({
    fullName: "",
    bookingName: "",
    date: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      bookingName: currentBooking,
    }));
  }, [currentBooking]);

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios
      .post(createBooking, data)
      .then((res) => {
        console.log(res);
        toast.success(res?.data?.message);
        setOpenModal(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.error);
      });
  };

  // Closing modal
  const closeHandler = () => {
    setOpenModal(false);
  };

  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const currentDay = String(currentDate.getDate()).padStart(2, "0");

  // Format the date in YYYY-MM-DD
  const minDate = `${currentYear}-${currentMonth}-${currentDay}`;

  const selectDate = (bookingName) => {
    setOpenModal(true);
    setCurrentBooking(bookingName);
  };

  return (
    <div className="w-full md:px-10 mb-28">
      <div className="w-full flex items-center justify-center mb-10 md:mb-28">
        <h1 className="tracking-[10px] md:text-[25px] text-semibold">
          Bookings
        </h1>
      </div>
      <div className="md:px-20 flex flex-col items-center justify-center gap-10 md:flex-row">
        <div
          onClick={() => selectDate("Workshop")}
          className="flex flex-col items-center gap-2 hover:scale-105 ease-in-out duration-300 hover:text-primary hover:cursor-pointer"
        >
          <img
            src={require("../../../assets/Booking/booking1.png")}
            alt="booking1"
            className="hover:cursor-pointer"
          />
          <h2
            onClick={() => selectDate("Workshop")}
            className="hover:text-primary hover:cursor-pointer"
          >
            Workshop
          </h2>
        </div>
        <div
          onClick={() => selectDate("Workshop")}
          className="flex flex-col items-center gap-2 hover:text-primary hover:cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <img
            src={require("../../../assets/Booking/booking2.png")}
            alt="booking2"
          />
          <h2
            onClick={() => selectDate("Expo")}
            className="hover:text-primary hover:cursor-pointer"
          >
            Expo
          </h2>
        </div>
      </div>
      {openModal && (
        <div className="w-full h-full ">
          <div className="fixed top-0 left-0 bg-black/50 w-full h-full flex flex-col items-center justify-center overflow-y-scroll md:overflow-hidden">
            <div className="md:w-1/2 bg-slate-700 rounded-lg flex flex-col items-center p-5 m-5 relative mt-40 md:mt-0">
              <IoMdClose
                onClick={closeHandler}
                className="text-white absolute right-5 hover:text-primary hover:cursor-pointer"
              />
              <h1 className="text-primary font-bold text-[20px] ">Book Now</h1>
              <form
                onSubmit={submitHandler}
                action=""
                className="flex flex-wrap w-full p-2 text-white md:p-5"
              >
                <div className="w-full md:w-1/2 p-2 space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-medium md:text-[13px] "
                  >
                    Full Name
                  </label>
                  <input
                    id=""
                    name="fullName"
                    type="text"
                    className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                    placeholder="Full Name"
                    required
                    onChange={inputHandler}
                  />
                </div>
                <div className="w-full md:w-1/2 p-2 space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-medium md:text-[13px] "
                  >
                    Booking for
                  </label>
                  <input
                    id=""
                    name="bookingName"
                    type="text"
                    className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                    placeholder="booking Name"
                    required
                    value={currentBooking}
                    onChange={inputHandler}
                  />
                </div>
                <div className="w-full md:w-1/2 p-2 space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-medium md:text-[13px]"
                  >
                    Date
                  </label>
                  <input
                    id=""
                    name="date"
                    type="date"
                    className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                    placeholder="Date"
                    min={minDate}
                    required
                    onChange={inputHandler}
                  />
                </div>
                <div className="w-full md:w-1/2 p-2 space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-medium md:text-[13px]"
                  >
                    Phone Number
                  </label>
                  <input
                    id=""
                    name="phoneNumber"
                    type="number"
                    className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                    placeholder="Phone Number"
                    onChange={inputHandler}
                  />
                </div>
                <div className="w-full md:w-1/2 p-2 md:flex">
                  <div className="w-full p-1">
                    <label
                      htmlFor=""
                      className="text-xs font-medium md:text-[13px]"
                    >
                      Email
                    </label>
                    <input
                      id=""
                      name="email"
                      type="email"
                      className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                      placeholder="Email"
                      required
                      onChange={inputHandler}
                    />
                  </div>
                </div>
                <div className="w-full text-xs font-semibold mt-5 flex items-center justify-center">
                  <button className="bg-primary p-2 text-white px-5 rounded">
                    Confirm Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
