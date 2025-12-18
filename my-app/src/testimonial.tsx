import commaLeft from "./assets/images/fluent_comma-24-regular.png";
import commaRight from "./assets/images/fluent_comma-24-regular (1).png";
import frame from "./assets/images/Frame 23.png";

const Testimonial = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[945px] h-[627px] flex-col items-center-safe flex justify-center">
                <div className="w-[727px] h-[377px] ">
                    <div className="flex justify-center mb-[51px]">
                        <div className="w-[474px] h-[133px] ">
                            <div className="container-div relative left-[40%]"></div>
                            <div className="text-[35px] leading-[55px] text-center mb-[20px]">
                                <h1>Why customers love</h1>
                                <p className="font-bold">working with us</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start justify-center w-[727px] h-[193px] relative">
                        <img src={commaLeft} alt="" className="absolute top-2 left-0" />
                        <p className="text-[18px] text-gray-600 text-center flex w-[535px] h-[181px]  py-7">Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</p>
                        <img src={commaRight} className="absolute bottom-5 right-0" alt="" />
                    </div>
                </div>
                <div>
                    <img src={frame} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Testimonial;