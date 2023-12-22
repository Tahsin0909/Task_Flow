import { GrUserManager } from "react-icons/gr";
import { MdTaskAlt } from "react-icons/md";
import SharedBtn from "../../Shared/SharedBtn/SharedBtn";
const WhoChooseUS = () => {
    return (
        <div className="lg:py-5">
            {/* section head  */}
            <div className="text-center lg:mb-4">
                <p className="md:text-2xl text-lg lg:text-3xl font-extrabold text-[#E7717D]">Our Value Proposition</p>
                <p className="md:text-sm text-xs text-[#AFD275]">Connecting Diverse Professionals</p>
            </div>
            <div className="flex lg:gap-2  justify-between px-4">
                <div>
                    <h1 className="lg:text-xl font-bold text-[#E7717D]">Who Uses Task Flow?</h1>
                    <p className="my-2"><span className="text-[#AFD275] flex  items-center font-semibold pr-1"><GrUserManager/> Project Managers:</span> Streamline task allocation, monitor progress, and ensure project deadlines are met effectively.</p>
                    <p className="my-2"><span className="text-[#AFD275] flex  items-center font-semibold pr-1"><GrUserManager/>Development Teams:</span> Coordinate workflows, manage sprints, and resolve technical issues seamlessly.</p>
                    <p className="my-2"><span className="text-[#AFD275] flex  items-center font-semibold pr-1"><GrUserManager/>Business Professionals:</span> Organize tasks, align them with strategic goals, and track project milestones efficiently.</p>
                    <p className="my-2"><span className="text-[#AFD275] flex  items-center font-semibold pr-1"><GrUserManager/>Individual Users:</span> Simplify personal task management, set priorities, and maintain productivity.</p>
                </div>
                <img className="items-end" src="https://i.ibb.co/mcvDRCP/planning-set-4-removebg-preview-1.png" alt="" />
                <div className="items-start">
                    <h1 className="lg:text-xl font-bold text-[#E7717D]">Benefits</h1>
                    <p className="my-2"><span className="text-[#AFD275] flex items-center font-semibold pr-1"><MdTaskAlt />Streamlined Task Management:</span> Simplify task allocation, monitoring, and completion for improved productivity.</p>
                    <p className="my-2"><span className="text-[#AFD275] flex items-center font-semibold pr-1"><MdTaskAlt />Team Collaboration:</span> Enhance communication, facilitate teamwork, and ensure everyone stays on the same page.</p>
                    <p className="my-2"><span className="text-[#AFD275] flex items-center font-semibold pr-1"><MdTaskAlt />Goal Alignment:</span> Align tasks with overarching project goals and business objectives seamlessly.</p>
                    <SharedBtn button={'Manage Task'}/>
                </div>
            </div>
        </div>
    );
};

export default WhoChooseUS;