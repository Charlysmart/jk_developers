import mobileApp from "./assets/images/Mobile_app_perspective_matte.png";
import code from "./assets/images/Code_perspective_matte.png";
import dashboard from "./assets/images/Dashboard_perspective_matte.png";
import ellipse from "./assets/images/Ellipse 180.png";

type ServiceCardProps = {
    image: string, 
    title: string, 
    content: string, 
    alt: string
}
const ServiceCard = ({image, title, content, alt} : ServiceCardProps) => {
    return (
        <div className="w-[333px] h-[287px] bg-white flex items-center-safe justify-center-safe px-3 hover:rounded-lg hover:border hover:border-fuchsia-800 hover:transform hover:translate-y-3 transition-all">
            <div className="flex flex-col gap-[20px] ">
                <div className="rounded-full h-[58px] w-[58px] flex justify-center items-center" style={{background: "linear-gradient(#F76680 0%, #57007B 100%)"}}>
                    <div className="bg-white h-[56px] w-[56px] rounded-full flex justify-center items-center">
                        <img src={image} alt={alt} className="w-[34px] h-[34px]" />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-[20px] leading-[136.5%] text-gray-800">{title}</p>
                </div>
                <div>
                    <p className="text-gray-600 text-[14px] leading-[162%]">{content}</p>
                </div>
            </div>
        </div>
    )
}
const Services = () => {
    return (
        <div>
            <div className="relative font-inter" style={{backgroundColor: "#F9F9FF"}}>
                <img src={ellipse} alt="ellipse" className="absolute -top-9 left-[30%]" />
                <div className="py-[2rem] relative font-inter z-[1000] border-y border-y-gray-200" style={{backgroundColor: "#F9F9FF"}}>
                    <h1 className="text-center font-bold text-[35px] leading-[55px] text-gray-900 mb-[2rem]">Services we offer</h1>
                    <div className="flex gap-[20px] mb-7">
                        <ServiceCard image= {mobileApp} title = "Mobile App Development" content = "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age." alt= "mobile app" />

                        <ServiceCard image= {code} title = "Web Design & Development" content = "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age." alt= "code" />

                        <ServiceCard image= {dashboard} title = "Software Testing Service" content = "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age." alt= "dashboard" />

                        <ServiceCard image= {mobileApp} title = "Mobile App Development" content = "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age." alt= "mobile app" />
                    </div>
                    <div className="flex items-center justify-around p-[">
                        <div></div>
                        <div className="flex justify-center items-center-safe gap-[5px]">
                            <div className="w-[13px] h-[13px] border border-gray-400 rounded-full"></div>
                            <div className="w-[13px] h-[13px] border border-gray-400 rounded-full"></div>
                            <div className="w-[15px] h-[15px] rounded-full" style={{background: "linear-gradient(#F76680 0%, #57007B 100%)"}}></div>
                            <div className="w-[13px] h-[13px] border border-gray-400 rounded-full"></div>
                            <div className="w-[13px] h-[13px] border border-gray-400 rounded-full"></div>
                        </div>
                        <div className="flex items-center-safe gap-2">
                            <p className="text-gray-500 font-medium">01</p>
                            <div className="w-[111px] h-[3px] bg-gray-300"><div className="bg-purple-900 w-[13px] h-full"></div></div>
                            <p className="text-purple-900 font-medium">05</p>
                        </div>
                    </div>
                </div>
                <img src={ellipse} alt="ellipse" className="absolute -bottom-9 left-[5%]" />
            </div>
        </div>
    );
}

export default Services;