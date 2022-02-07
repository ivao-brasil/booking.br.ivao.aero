import { FunctionComponent, isValidElement, MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ActionButtonProps {
	backgroundFilled?: boolean;
	content: ReactNode;
	icon?: ReactNode;
	width?: string;
	height?: string;
	backgroundColor?: string;
	iconBackgroundColor?: string;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ActionButton: FunctionComponent<ActionButtonProps> = ({
	content, icon, backgroundFilled = true,
	backgroundColor = "bg-green", width = "w-fit", height = "h-14",
	iconBackgroundColor, onClick
}) => {
	return (
		<button className={`block ${backgroundFilled ? backgroundColor : ""} rounded-md ${width} ${height}`} onClick={onClick}>
			<div className="flex items-center h-full">
				{icon && (<ButtonIcon backgroundFilled={backgroundFilled} backgroundColor={iconBackgroundColor}>{icon}</ButtonIcon>)}
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
		<span className={`block w-full px-8 leading-[37px] text-center font-action font-semibold ${textColor} truncate`}>
			{children}
		</span>
	)
};

interface ButtonIconProps {
	backgroundFilled?: boolean;
	backgroundColor?: string;
}

export const ButtonIcon: FunctionComponent<ButtonIconProps> = ({ backgroundColor = "bg-light-green", backgroundFilled = true, children }) => {
	return (
		<div className={`${backgroundFilled ? `${backgroundColor}` : ""} w-14 rounded-tl-md rounded-bl-md text-white h-full`}>
			<div className="flex justify-center items-center h-full">
				{children}
			</div>
		</div>
	);
};

interface LinkButtonProps extends Omit<ActionButtonProps, "onClick"> {
	href: string;
}

export const LinkButton: FunctionComponent<LinkButtonProps> = ({
	content, icon, href, backgroundFilled = true,
	backgroundColor = "bg-green", width = "w-fit", height = "h-14",
	iconBackgroundColor
}) => {
	const background = backgroundFilled ? backgroundColor : "";
	const isExternalLink = href.indexOf("://") !== -1;
	const buttonContent = (
		<div className="flex items-center h-full">
			{icon && (<ButtonIcon backgroundFilled={backgroundFilled} backgroundColor={iconBackgroundColor}>{icon}</ButtonIcon>)}
			{(isValidElement(content) ? content : <ButtonText textColor={backgroundFilled ? "text-white" : undefined}>{content}</ButtonText>)}
		</div>
	);
	const classNames = `block ${background} rounded-md ${width} ${height}`;

	if (isExternalLink) {
		return (
			<a className={classNames} href={href} target="_blank" rel="noreferrer">
				{buttonContent}
			</a>
		);
	}

	return (
		<Link className={classNames} to={href}>
			{buttonContent}
		</Link>
	);
};

