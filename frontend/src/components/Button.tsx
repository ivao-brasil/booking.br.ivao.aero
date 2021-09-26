import { forwardRef, PropsWithChildren } from "react";

interface DefaultButtonProps {
	size?: "sm" | "md" | "lg"
	type ?: "submit" | "reset"
	href ?: string
}

export const DefaultButton = forwardRef<HTMLAnchorElement,  PropsWithChildren<DefaultButtonProps>>((props, ref) => {
	const defaultProps = {
		size: "md"
	}

	const btnProps = {...defaultProps, ...props}

	let sizeClassNames = ""
	if (btnProps.size === "sm") {
		sizeClassNames = "py-2 px-4 text-sm"
	} else if (btnProps.size === "md") {
		sizeClassNames = "py-2 px-4"
	} else {
		sizeClassNames = "py-6 px-24"
	}

	const classNames = `block my-1 text-center text-white font-medium bg-blue-400 shaow-md rounded-md hover:bg-blue-600 ${sizeClassNames}`

	const isLink = !!props.href

	if (isLink) {
		return (
			<a href={props.href} ref={ref} className={classNames} {...btnProps}>
				{props.children}
			</a>
		)
	} else {
		return (
			<button className={classNames} {...btnProps}>
				{props.children}
			</button>
		)
	}
});
