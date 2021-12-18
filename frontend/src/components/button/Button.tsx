import { FunctionComponent } from "react";

interface ActionButtonProps {
	backgroundFilled?: boolean
}

export const ActionButton: FunctionComponent<ActionButtonProps> = ({ children, backgroundFilled = true }) => {
	const background = backgroundFilled ? "bg-green" : ""
	return (
		<button className={`${background} rounded-md h-14`}>{children}</button>
	)
};

interface ButtonTextProps {
	muted?: boolean
}

export const ButtonText: FunctionComponent<ButtonTextProps> = ({ children, muted = false }) => {
	const textColor = muted ? "text-gray dark:text-white" : "text-white"
	return (
		<span className={`inline-block px-8 py-2.5 leading-[37px] font-action font-semibold ${textColor}`}>
			{children}
		</span>
	)
};

export const ButtonIcon: FunctionComponent = ({ children }) => (
	<div className="inline-block float-left relative w-14 h-full p-5 bg-light-green rounded-tl-md rounded-bl-md text-white">
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			{children}
		</div>
	</div>
);

