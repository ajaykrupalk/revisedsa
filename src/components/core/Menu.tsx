import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="ml-2 h-screen w-full text-normal leading-loose overflow-y-hidden sm:text-[14px] sm:w-48 lg:w-60 sm:px-4 sm:mt-3 sm:ml-3">
            <div className="mt-3">
                <h3 className="font-semibold text-slate-900">Getting Started</h3>
                <div className="flex flex-col items-start">
                    <a className="font-normal text-gray-500 hover:text-slate-900">
                    <Link to='/docs/introduction'>Introduction</Link>
                    </a>
                </div>
            </div>
            <div className="mt-3">
                <h3 className="font-semibold">Data Structures</h3>
                <div className="flex flex-col items-start">
                    <a className="font-normal text-gray-500 hover:text-slate-900">Array</a>
                    <a className="font-normal text-gray-500 hover:text-slate-900">String</a>
                    <a className="font-normal text-gray-500 hover:text-slate-900">Hash Map</a>
                    <a className="font-normal text-gray-500 hover:text-slate-900">Recursion</a>
                </div>
            </div>
        </div>
    )
}
