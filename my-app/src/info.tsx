import videoWrapper from "./assets/images/Video-wrappper.png";
type ArrowButtonProps = {
    color: string, 
    bg: string, 
    border?: string
}
function ArrowButton ({ color, bg, border } : ArrowButtonProps) {
    return (
        <div className={`rounded-full w-[45px] h-[45px] border-2 ${border} text-${color} bg-${bg}`}></div>
    );
}

const Info = () => {
    return (
        <div className="px-[5%] font-inter">
            <div className="flex mb-[150px]">
                <div>
                    <div className="container-div"></div>
                    <div className="mb-[51px]">
                        <h1 className="mb-[30px] w-[474px] h-[108px] text-[35px] leading-[55px] text-gray-900">Leading companies trust us <br /><span className="font-bold">to develop software</span></h1>
                        <p className="text-[18px] leading-[36px] text-gray-600 w-[535px] h-[181px]">We <span style={{background: "linear-gradient(#F76680 0%, #57007B 100%)", WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text"}}>add development capacity</span>to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.</p>
                    </div>
                    <p className="text-purple-900 font-medium">See more Informations </p>
                </div>
                <div>
                    <img src={videoWrapper} alt="video wrapper" />
                </div>
            </div>
            <div className="w-[412px] h-[133px]">
                <div className="container-div"></div>
                <div className="text-[35px] text-gray-900">
                    <p>Meet the People</p>
                    <h1 className="font-bold">We are Working With</h1>
                </div>
            </div>
            <div className="flex gap-[22px] justify-end mb-8">
                <ArrowButton color= "purple-900" bg= "transparent" border= "border-purple-800" />
                <ArrowButton color= "white" bg= "purple-900" border= "border-purple-800" />
            </div>
        </div>
    );
}

export default Info;