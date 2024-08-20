import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className='m-auto mt-3 flex flex-col justify-center h-full text-center w-full'>
            <div className="w-full flex justify-center">
                <div className='w-fit text-xs bg-gray-100 h-full p-1.5 rounded-full font-medium hover:ring-2 hover:ring-indigo-200'>
                    <span className="peer">
                        <span className='text-xs bg-slate-900 text-white rounded-full py-0.5 px-2 mr-1.5'>New</span>
                        Notes for Arrays is live! 🎉
                    </span>
                    <svg className='transition-transform duration-500 transform peer-hover:translate-x-0.5 hover:translate-x-0.5 ml-0.5 inline-flex' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </div>
            </div>
            <div className="mt-3">
                <h1 className="font-semibold text-7xl leading-tight">
                    Simple DSA
                    <br />
                    Notes
                </h1>
                <p className="text-sm text-gray-500 font-medium">The quickest way to review LeetCode <br />
                    concepts and problems</p>
            </div>
            <div className="mt-3">
                <Button className="w-fit h-fit">
                    <span className="peer">Get Started</span>
                    <svg className='transition-transform duration-500 transform peer-hover:translate-x-0.5 hover:translate-x-0.5 ml-0.5 inline-flex' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </Button>
            </div>
        </div>
    )
}
