
const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className=" absolute right-0 mr-4 mt-4 px-4 bg-sky-900 text-white text-center">${price}</p>
        <div className="card-body items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
         
          <div className="card-actions justify-end">
            <button className="btn bg-slate-600 text-yellow-400">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;