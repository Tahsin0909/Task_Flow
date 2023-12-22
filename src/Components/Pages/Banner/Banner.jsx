import SharedBtn from "../../Shared/SharedBtn/SharedBtn";

const Banner = () => {
    return (
        <div className="flex md:flex-row flex-col items-center justify-center md:justify-between lg:pl-4 pl-1">
            <div data-aos="zoom-in">
                <h1 className="lg:text-5xl md:text-2xl text-xl font-bold  mb-2">
                    <span className="text-[#E7717D]">Boost Productivity</span>
                    <br /> <span className="text-[#AFD275]">with</span> <br />
                    <span className="text-[#E7717D]">Intuitive Task Management</span>
                </h1>
                <h3 className="lg:text-lg text-sm text-gray-400 lg:mb-4 mb-2">Unlock Your Potential: Streamline Tasks, Boost Efficiency, and Achieve More</h3>
                <SharedBtn button={"Let's Explore"} />
            </div>
            <div>
                <img src="https://i.ibb.co/V3zBw0s/image-removebg-preview-18-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;