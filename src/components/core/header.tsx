import { ComboboxDemo } from "./combobox";

export default function Header() {
    return (
        <div className="w-full h-10 pt-2 pl-4 pr-4 flex flex-row justify-between">
            <div>
                <h1 className="font-semibold text-xl">revise.</h1>
            </div>
            <div>
                <ComboboxDemo />
            </div>
        </div>
    )
}