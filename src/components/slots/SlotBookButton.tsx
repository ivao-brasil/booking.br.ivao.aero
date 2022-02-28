import { FunctionComponent } from "react";

type HtmlButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface SlotBookButtonProps extends Omit<HtmlButtonProps, "className"> {
	canBookFLight?: boolean;
	content: string;
}

export const SlotBookButton: FunctionComponent<SlotBookButtonProps> = ({ content, canBookFLight = true, ...htmlButtonProps }) => {
    const background = canBookFLight ? "bg-green text-white" : "bg-red/10 text-red dark:bg-red dark:text-white";

    return (
		<button
			className={`block ${background} rounded-md w-24 h-9 ${canBookFLight ? "" : "cursor-not-allowed"}`}
			{...htmlButtonProps}
		>
			<span className={`block text-center font-header font-bold truncate text-sm`}>
			    {content}
		    </span>
		</button>
	);
}
