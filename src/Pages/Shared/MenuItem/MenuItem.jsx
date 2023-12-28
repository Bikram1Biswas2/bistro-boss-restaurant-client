
const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div  className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h4 className="uppercase font-bold">{name}----------</h4>
                <p className="text-sm">{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;