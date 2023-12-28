
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" w-4/12 mx-auto text-center mb-12">
            <p className="text-yellow-600 text-xl">{subHeading}</p>
            <h4 className="text-bold text-4xl border-y-4 p-4">{heading}</h4>
            
        </div>
    );
};

export default SectionTitle;