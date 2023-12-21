import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
const Footer = () => {
    return (
        <div>
            <footer className="footer px-2 py-6 bg-base-200 text-base-content">
                <aside>
                    <Link to={'/'} className="hover:cursor-default">
                        <img className="lg:w-16 md:w-14 w-10" src="../../public/image/logo.png" alt="" />
                    </Link>
                    <p>Task Flow Service<br />Providing reliable task management since 2023</p>
                    <div className="flex items-center gap-2">
                        <Link to={'https://www.facebook.com/JISAN0909'}>
                            <FaFacebook size={30} stroke="#E7717D" className="rounded-full" color="#E7717D" />
                        </Link>
                        <Link to={'https://www.facebook.com/JISAN0909'}>
                            <AiFillTwitterCircle size={30} stroke="#E7717D" className="rounded-full" color="#E7717D" />
                        </Link>
                        <Link to={'https://www.facebook.com/JISAN0909'}>
                            <ImLinkedin size={30} stroke="#E7717D" className="rounded-full" color="#E7717D" />
                        </Link>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;