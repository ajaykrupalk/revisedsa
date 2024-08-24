import HeroImage from "../../assets/heroImage.png"
import HeroText from "./HeroText"

export default function Hero() {
    return (
        <div className='m-auto mt-3 flex flex-col justify-center h-full text-center w-full'>
            <HeroText />
            <div className="w-full flex justify-center mt-7">
                <img src={HeroImage} alt="Notes" width="500" height="500" />
            </div>
        </div>
    )
}
