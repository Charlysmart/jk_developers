import Button from "./button";
import heroWrapper from "./assets/images/Hero-Wrapper__image--center.png";

const Hero = () => {
    return (
        <div>
            <div className="flex px-[7%] font-inter h-[80vh]">
                <div className="w-1/2 flex flex-col justify-end">
                    <h1 className="text-[53px] font-light leading-[71px] text-gray-900">Great <span className="font-bold text-[45px]" style={{background: "linear-gradient(#DE4396 0%, rgba(13, 28, 159, 0.3) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Product</span> is </h1>
                    <p className="text-[53px] font-inter font-extrabold mb-[1.5rem] text-gray-900">built by great <span style={{background: "linear-gradient(#F7666F 0%, #406AFF 100%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>teams</span></p>
                    <p className="text-gray-700 text-[18px] leading-[36px] mb-[75px]">We help build and manage a team of world-class developers to bring your vision to life</p>
                    <div className="mb-0">
                        <Button label="Let's get started!" color="#3D63EA" />
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <img src={heroWrapper} className="h-full" alt="hero wrapper" />
                </div>
            </div>
        </div>
    );
}

export default Hero;