import MenuItem from "./MenuItem";

export default function Menu({ onItemClick }) {
    return (
        <div className="ml-2 h-screen w-full text-normal leading-loose overflow-y-hidden sm:text-[14px] sm:w-48 lg:w-60 sm:px-4 sm:mt-3 sm:ml-3">
            <MenuItem onMenuItemClick={onItemClick}/>
        </div>
    )
}
