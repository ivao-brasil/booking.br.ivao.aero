import { FunctionComponent, MouseEventHandler, ReactNode } from "react";

interface ActionButtonProps {
	backgroundFilled?: boolean;
	content: ReactNode;
	icon?: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ActionButton: FunctionComponent<ActionButtonProps> = ({ content, icon, backgroundFilled = true, onClick }) => {
	const background = backgroundFilled ? "bg-green" : ""
	return (
		<button className={`block ${background} rounded-md h-14`} onClick={onClick}>
			{icon && (<ButtonIcon>{icon}</ButtonIcon>)}
            <ButtonText muted={!backgroundFilled}>{content}</ButtonText>
		</button>
	);
};

interface ButtonTextProps {
	muted?: boolean;
}

export const ButtonText: FunctionComponent<ButtonTextProps> = ({ children, muted = false }) => {
	const textColor = muted ? "text-gray dark:text-white" : "text-white"
	return (
		<span className={`block px-8 py-2.5 leading-[37px] text-center font-action font-semibold ${textColor} truncate`}>
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

interface LinkButtonProps extends Omit<ActionButtonProps, "onClick"> {
	href: string;
}

export const LinkButton: FunctionComponent<LinkButtonProps> = ({ content, icon, href, backgroundFilled = true }) => {
	const background = backgroundFilled ? "bg-green" : ""
	return (
		<a className={`block ${background} rounded-md h-14`} href={href}>
			{icon && (<ButtonIcon>{icon}</ButtonIcon>)}
            <ButtonText muted={!backgroundFilled}>{content}</ButtonText>
		</a>
	);
};

