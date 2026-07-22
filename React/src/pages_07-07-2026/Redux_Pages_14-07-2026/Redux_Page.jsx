
import Counter3 from './../../components_07-07-2026/Redux_14-07-2026/Counter3_14-07-2026/Counter3';
import Navbar3 from './../../components_07-07-2026/Redux_14-07-2026/Movie_Ticket_Booking_14-07-2026/Navbar3';
import Movie from './../../components_07-07-2026/Redux_14-07-2026/Movie_Ticket_Booking_14-07-2026/Movie';
import SeatSelection from './../../components_07-07-2026/Redux_14-07-2026/Movie_Ticket_Booking_14-07-2026/SeatSelection';
import Payment from './../../components_07-07-2026/Redux_14-07-2026/Movie_Ticket_Booking_14-07-2026/Payment';
import AddTodo from '../../components_07-07-2026/Redux_14-07-2026/Todo_List_14-07-2026/AddTodo';
import TodoList from '../../components_07-07-2026/Redux_14-07-2026/Todo_List_14-07-2026/TodoList';
import Account from '../../components_07-07-2026/Redux_14-07-2026/Banking_Application_14-07-2026/Account';
import Deposit from '../../components_07-07-2026/Redux_14-07-2026/Banking_Application_14-07-2026/Deposit';
import Withdraw from '../../components_07-07-2026/Redux_14-07-2026/Banking_Application_14-07-2026/Withdraw';
import Transactions from '../../components_07-07-2026/Redux_14-07-2026/Banking_Application_14-07-2026/Transactions';
import StudentList from '../../components_07-07-2026/Redux_14-07-2026/Student_Attendance_14-07-2026/StudentList';
import AttendanceSummary from '../../components_07-07-2026/Redux_14-07-2026/Student_Attendance_14-07-2026/AttendanceSummary';






function Redux_Page() {
  return (
    <div>
        <Counter3/>

        <hr/>
        <h2>movie ticket booking</h2>
        <Navbar3/>
        <Movie/>
        <SeatSelection/>
        <Payment/>
        <hr/>
        <h2> Todo Application</h2>
        <AddTodo/>

        <TodoList/>
        <hr/>
        <h2>Banking Application</h2>

        <Account/>

        <Deposit/>

        <Withdraw/>

        <Transactions/>

        <hr/>
        <h2>Students Attendance</h2>
        <StudentList/>

        <AttendanceSummary/>
        

    </div>
  )
}

export default Redux_Page