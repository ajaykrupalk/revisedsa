import HeroImage from "../../assets/heroImage.png"
import HeroText from "./HeroText"

export default function Hero() {
    return (
        <div className='m-auto mt-3 flex flex-col justify-center h-full text-center w-full'>
            <HeroText/>
            <div className="w-full h-full flex justify-center mt-7">
                <img src={HeroImage} alt="Notes" className="w-[200px] h-[200px] sm:w-[400px] sm:h-auto"/>
            </div>
        </div>
    )
}
