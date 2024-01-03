
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price ,_id} = item;

  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleAddToCart = food => {
    if (user && user.email) {
      //TODO: send the cart to the database
         console.log(user.email, food);
         const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price

         }
         axios.post('http://localhost:5000/carts', cartItem)
         .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
           }
         })
       
    }
    else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,LogIn!"
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login page
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className=" absolute right-0 mr-4 mt-4 px-4 bg-sky-900 text-white text-center">${price}</p>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn bg-slate-100 border-b-4 border-orange-400 text-yellow-400">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;