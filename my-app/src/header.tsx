import logo from "./assets/images/logo.png";
import Button from "./button";
const Header = () => {
    return (
        <div className="flex h-[12vh] w-[100%] shadow-custom justify-around bg-white mb-[8vh] font-inter">
            <div className="w-[20%] flex items-center">
                <img src={logo} alt="" />
            </div>
            <ul className="w-[50%] flex justify-around text-gray-500 font-medium items-center">
                <li>About us</li>
                <li>Services</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>How it Works</li>
                <li>Hire</li>
            </ul>
            <div className="w-[20%] justify-end items-center flex">
                <Button label="Contact us" color = "linear-gradient(to right, #6675F7 0%, #57007B 100%)" />
            </div>
        </div>
    );
}

export default Header;