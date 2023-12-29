
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const[menu] = useMenu()
    const popular = menu.filter(item => item.category ==='popular')


    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item =>item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // }, [])

    return (
        <section className="mt-10">
            <SectionTitle
               subHeading = {'---Check it out---'}
               heading ={'From Our Menu'}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 space-y-3 gap-3">
               {
                popular.map(item =><MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
               }
            </div>
            <div className="mt-4 text-center">
            <button className="btn btn-outline border-0 border-b-4 mx-auto ">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;