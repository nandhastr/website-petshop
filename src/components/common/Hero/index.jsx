import HeroImg from "../../../assets/images/hero.jpg";
import LearnMoreBox from "../LearnMoreBox";

const Hero = () => {
    return (
        <>
            <div
                className="flex flex-col items-start justify-center h-screen bg-gray-100 px-2 md:px-[6rem] gap-[2rem]"
                style={{
                    backgroundImage: `url(${HeroImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex flex-col gap-4 w-[100%] md:w-[75%]">
                    <h1 className="text-6xl font-bold mb-4 text-[#fff]  uppercase">pet shop</h1>
                    <h2 className="text-lg md:text-4xl text-gray-100 ">Your one-stop solution for managing your tasks efficiently.</h2>
                    <p className="text-gray-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam esse, iste odit laborum amet vero ab expedita quos autem doloremque impedit debitis, rerum, architecto consequuntur.</p>
                </div>
                
                <LearnMoreBox className="mt-6 px-4 border-2 border-[#fff] text-[#fff] uppercase py-2  hover:bg-[#fff] hover:text-[#000] transition-all duration-700 ease-in-out" >learn more</LearnMoreBox>
            </div>
        </>
    );
};

export default Hero;
