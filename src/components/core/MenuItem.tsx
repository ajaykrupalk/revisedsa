type MenuItem = {
    [key: string]: {
        [subKey: string]: {
            path: string;
        }
    }
}

import { Link } from "react-router-dom";
import Menu from "../../assets/MenuItems.json"

export default function MenuItem({ onMenuItemClick }) {
    return (
        <>
            {Object.keys(Menu as MenuItem).map((section, index) => (
                <div className="mt-3" key={index}>
                    <h3 className="font-semibold text-slate-900">{section}</h3>
                    <div className="flex flex-col items-start" onClick={onMenuItemClick}>
                        {Object.keys((Menu as MenuItem)[section]).map((subSection, subIndex) => (
                            <a key={subIndex} className="font-normal text-gray-500 hover:text-slate-900">
                                <Link to={(Menu as MenuItem)[section][subSection].path}>{subSection}</Link>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
