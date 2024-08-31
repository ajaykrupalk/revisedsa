import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function HeroText() {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className='outline-none w-fit text-xs bg-gray-100 h-full p-1.5 rounded-full font-medium hover:ring-2 hover:ring-slate-200 group'>
                    <span className="peer">
                        <span className='text-xs bg-slate-900 text-white rounded-full py-0.5 px-2 mr-1.5'>New</span>
                        Notes for Big O Notation is live! 🎉
                    </span>
                    <svg className='transition-transform duration-500 transform group-hover:translate-x-0.5 ml-0.5 inline-flex' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </div>
            </div>
            <div className="mt-2">
                <h1 className="font-semibold text-7xl leading-tight">
                    Simple DSA
                    <br />
                    Notes
                </h1>
                <p className="text-sm text-gray-500 font-normal">The quickest way to review LeetCode <br />
                    concepts and problems</p>
            </div>
            <div className="mt-3">
                <Link to="/docs/introduction">
                    <Button className="w-fit h-fit group">
                        Get Started
                        <svg className='transition-transform duration-300 transform group-hover:translate-x-1 ml-0.5 inline-flex' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                        </svg>
                    </Button>
                </Link>
            </div>
        </>
    )
}
