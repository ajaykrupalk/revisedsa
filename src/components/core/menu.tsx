export default function Menu() {
    return (
        <div className="h-screen w-60 px-4 mt-3 ml-3 text-[14px] leading-loose overflow-y-hidden">
            <div>
                <h3 className="font-semibold text-slate-900">Getting Started</h3>
                <p className="font-medium text-gray-500 hover:text-slate-900">Introduction</p>
            </div>
            <div className="mt-3">
                <h3 className="font-semibold">Data Structures</h3>
                <p className="font-medium text-gray-500 hover:text-slate-900">Array</p>
                <p className="font-medium text-gray-500 hover:text-slate-900">String</p>
                <p className="font-medium text-gray-500 hover:text-slate-900">Hash Map</p>
                <p className="font-medium text-gray-500 hover:text-slate-900">Recursion</p>
            </div>
        </div>
    )
}
