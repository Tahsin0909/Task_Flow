/* eslint-disable react/prop-types */

const SharedBtn = ({ button }) => {
    return (
        <div className=" w-40 h-14">
            <button className="flex  gap-1 items-center cursor-pointer transition-all bg-[#E7717D] text-white px-6 py-2 rounded-lg border-[#AFD275] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-[#AFD275] shadow-[#AFD275] active:shadow-none hover:font-bold">
                {button}
            </button>
        </div>
    );
};

export default SharedBtn;