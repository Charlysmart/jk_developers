import logo5 from "./assets/images/logo5.png";
import logo6 from "./assets/images/Logo-6.png";
import logo7 from "./assets/images/logo-7.png";
import logo8 from "./assets/images/logo8.png";
import logo9 from "./assets/images/logo9.png";
import logo10 from "./assets/images/logo-9.png";
import ellipse from "./assets/images/Ellipse 180.png";

type ImagesProp = {
    src: string
    alt: string
}

function Images({ src, alt } : ImagesProp) {
    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    )
}

const Sponsor = () => {
    return (
        <div className="relative">
            <img src={ellipse} alt="ellipse" className="absolute -top-9 left-[60%]" />
            <div className="relative flex gap-[54px] h-[202px] border-y-2 border-y-gray-200 items-center z-[9999] bg-gray-100">
                <Images src={logo5} alt="logo 5" />
                <Images src={logo6} alt="logo 6" />
                <Images src={logo7} alt="logo 7" />
                <Images src={logo8} alt="logo 8" />
                <Images src={logo9} alt="logo 9" />
                <Images src={logo10} alt="logo 10" />
            </div>

        </div>
    );
}

export default Sponsor;