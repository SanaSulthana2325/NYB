import { configureStore} from "@reduxjs/toolkit";
import counterReducer from '../Counter3_14-07-2026/CounterSlice'
import bookingReducer from"../Movie_Ticket_Booking_14-07-2026/BookingSlice";
import todoReducer from"../Todo_List_14-07-2026/TodoSlice";
import bankReducer from"../Banking_Application_14-07-2026/BankSlice";
import attendanceReducer from"../Student_Attendance_14-07-2026/AttendanceSlice";
import attendance from "../../Task4_16-07-2026/ContextApi_Redux_useReducer_16-07-2026/Redux_Toolkit_16-07-2026/AttendanceSlice"
import counterReducer1 from "../../Task5_17-07-2026/Comparison_17-07-2026/ContextAPI_Redux_useReducer/Redux/CounterSlice1"

export const store = configureStore ({
    reducer:{
        counter:counterReducer,
        booking: bookingReducer,
        todo : todoReducer,
        bank: bankReducer,
        attendance : attendanceReducer,
        attendance : attendanceReducer,
        counter1:counterReducer1
    }
});