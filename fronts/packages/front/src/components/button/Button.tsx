import { FunctionComponent, isValidElement, MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ActionButtonProps {
	backgroundFilled?: boolean;
	content: ReactNode;
	icon?: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ActionButton: FunctionComponent<ActionButtonProps> = ({ content, icon, backgroundFilled = true, onClick }) => {
	const background = backgroundFilled ? "bg-green" : "";
	return (
		<button className={`block ${background} rounded-md`} onClick={onClick}>
			<div className="flex items-center">
				{icon && (<ButtonIcon backgroundFilled={backgroundFilled}>{icon}</ButtonIcon>)}
				{(isValidElement(content) ? content : <ButtonText textColor={backgroundFilled ? "text-white" : undefined}>{content}</ButtonText>)}
			</div>
		</button>
	);
};

interface ButtonTextProps {
	textColor?: string;
}

export const ButtonText: FunctionComponent<ButtonTextProps> = ({ children, textColor = "text-light-gray-2 dark:text-white" }) => {
	return (
		<span className={`block px-8 py-2.5 leading-[37px] text-center font-action font-semibold ${textColor} truncate`}>
			{children}
		</span>
	)
};

interface ButtonIconProps {
	backgroundFilled?: boolean;
}

export const ButtonIcon: FunctionComponent<ButtonIconProps> = ({ backgroundFilled = true, children }) => {
	const background = backgroundFilled ? "bg-light-green w-14 p-5" : "";
	return (
		<div className={`relative ${background} rounded-tl-md rounded-bl-md text-white`}>
			{children}
		</div>
	);
};

interface LinkButtonProps extends Omit<ActionButtonProps, "onClick"> {
	href: string;
}

export const LinkButton: FunctionComponent<LinkButtonProps> = ({ content, icon, href, backgroundFilled = true }) => {
	const background = backgroundFilled ? "bg-green" : "";
	const isExternalLink = href.indexOf("://") !== -1;
	const buttonContent = (
		<div className="flex items-center">
			{icon && (<ButtonIcon backgroundFilled={backgroundFilled}>{icon}</ButtonIcon>)}
			{(isValidElement(content) ? content : <ButtonText textColor={backgroundFilled ? "text-white" : undefined}>{content}</ButtonText>)}
		</div>
	);

	if (isExternalLink) {
		return (
			<a className={`block ${background} rounded-md`} href={href} target="_blank" rel="noreferrer">
				{buttonContent}
			</a>
		);
	}

	return (
		<Link className={`block ${background} rounded-md`} to={href}>
			{buttonContent}
		</Link>
	);
};

