import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="h-screen w-60 px-4 mt-3 ml-3 text-[14px] leading-loose overflow-y-hidden">
            <div className="mt-3">
                <h3 className="font-semibold text-slate-900">Getting Started</h3>
                <div className="flex flex-col items-start">
                    <a className="font-medium text-gray-500 hover:text-slate-900">
                    <Link to='/docs/introduction'>Introduction</Link>
                    </a>
                </div>
            </div>
            <div className="mt-3">
                <h3 className="font-semibold">Data Structures</h3>
                <div className="flex flex-col items-start">
                    <a className="font-medium text-gray-500 hover:text-slate-900">Array</a>
                    <a className="font-medium text-gray-500 hover:text-slate-900">String</a>
                    <a className="font-medium text-gray-500 hover:text-slate-900">Hash Map</a>
                    <a className="font-medium text-gray-500 hover:text-slate-900">Recursion</a>
                </div>
            </div>
        </div>
    )
}
