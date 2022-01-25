import { FunctionComponent, isValidElement, MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ActionButtonProps {
	backgroundFilled?: boolean;
	content: ReactNode;
	icon?: ReactNode;
	width?: string;
	height?: string;
	backgroundColor?: string;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ActionButton: FunctionComponent<ActionButtonProps> = ({
	content, icon, backgroundFilled = true,
	backgroundColor = "bg-green", width = "w-fit", height = "h-14", onClick
}) => {
	const background = backgroundFilled ? backgroundColor : "";
	return (
		<button className={`block ${background} rounded-md ${width} ${height}`} onClick={onClick}>
			<div className="flex items-center h-full">
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
		<span className={`block w-full px-8 py-2.5 leading-[37px] text-center font-action font-semibold ${textColor} truncate`}>
			{children}
		</span>
	)
};

interface ButtonIconProps {
	backgroundFilled?: boolean;
}

export const ButtonIcon: FunctionComponent<ButtonIconProps> = ({ backgroundFilled = true, children }) => {
	const background = backgroundFilled ? "bg-light-green w-14" : "";
	return (
		<div className={`${background} rounded-tl-md rounded-bl-md text-white h-full`}>
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
	backgroundColor = "bg-green", width = "w-fit", height = "h-14"
}) => {
	const background = backgroundFilled ? backgroundColor : "";
	const isExternalLink = href.indexOf("://") !== -1;
	const buttonContent = (
		<div className="flex items-center h-full">
			{icon && (<ButtonIcon backgroundFilled={backgroundFilled}>{icon}</ButtonIcon>)}
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

