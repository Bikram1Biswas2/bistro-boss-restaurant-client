import { FaBookDead, FaCalendar, FaEnvelope, FaHome, FaSearch, FaShoppingCart, FaStreetView, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../../hooks/useCarts";


const Dashboard = () => {
    const[cart] = useCarts()

    //TODO: get is Admin value from the database
    const isAdmin = true;


    return (
       <div className="flex">
        {/* dashboard side bar */}
         <div className="w-64 min-h-screen bg-orange-400">
            <ul className="menu p-4">
                <li>
                    <NavLink to='/dashboard/userHome'>
                        <FaHome></FaHome>
                        User Home</NavLink>
                    </li>
                <li>
                    <NavLink to='/dashboard/reservation'>
                        <FaCalendar></FaCalendar>
                         Reservation</NavLink>
                    </li>
                <li>
                    <NavLink to='/dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        My Cart: ({cart.length})</NavLink>
                    </li>
                <li>
                    <NavLink to='/dashboard/review'>
                        <FaStreetView></FaStreetView>
                     Add a Review</NavLink>
                    </li>
                <li>
                    <NavLink to='/dashboard/bookings'>
                        <FaBookDead></FaBookDead>
                        My Bookings</NavLink>
                    </li>
                    {/* Shared */}
                    <div className="divider"></div> 
                    <li>
                    <NavLink to='/'>
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                    <li>
                    <NavLink to='/order/salad'>
                        <FaSearch></FaSearch>
                        Menu</NavLink>
                    </li>
                    <li>
                    <NavLink to='/order/contact'>
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink>
                    </li>
            </ul>
            
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                  <Outlet></Outlet>
            </div>
       </div>
    );
};

export default Dashboard;