import { FiSearch } from "react-icons/fi";

export const FlightSearchInput = () => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <FiSearch width={16} />
            </div>
            <input
                className="w-36 pl-7 pr-2 border-0 border-b border-[#818181] dark:border-dark-gray-3 text-[#818181] dark:text-light-gray-5 bg-white dark:bg-black font-action placeholder:text-[12px]"
                type="search"
                aria-label="Buscar voo"
                placeholder="Buscar voo" />
        </div>
    )
}
