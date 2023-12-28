import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './FeaturedItem.css'


const FeaturedItem = () => {
    return (
        <div className="featuredItem bg-fixed pt-8 my-20">
            <section className="mt-5 ">
            <SectionTitle
            subHeading={'---Check it out---'}
            heading={'Featured Item'}
            ></SectionTitle>
              <div className="md:flex justify-center items-center gap-6  py-20 px-36 bg-slate-400 bg-opacity-50">
              <div>
              <img className=" " src={featuredImg} alt="" />
              </div>
                <div className="text-white space-y-2">
                    <h2>March 20, 2023</h2>
                    <h3 className="uppercase font-bold">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem eius maxime dolores iusto aspernatur explicabo quibusdam voluptates. Eos ipsam nulla, inventore iure maiores odit quis aperiam blanditiis harum, commodi incidunt quasi eum ratione est soluta? Saepe provident suscipit sapiente.</p>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
              </div>
        </section>
        </div>
    );
};

export default FeaturedItem;