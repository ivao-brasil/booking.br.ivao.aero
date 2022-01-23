import { FunctionComponent, MouseEventHandler, ReactNode } from "react";

interface SlotBookButton {
	canBookFLight?: boolean;
	content: string;
	onBookClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const SlotBookButton: FunctionComponent<SlotBookButton> = ({ content, canBookFLight = true, onBookClick }) => {
    const background = canBookFLight ? "bg-green text-white" : "bg-red/10 text-red dark:bg-red dark:text-white";

    return (
		<button
			className={`block ${background} rounded-md w-24 h-9 ${canBookFLight ? "" : "cursor-not-allowed"}`}
			onClick={(evt) => canBookFLight && onBookClick && onBookClick(evt)}
		>
			<span className={`block text-center font-header font-bold truncate text-sm`}>
			    {content}
		    </span>
		</button>
	);
}
