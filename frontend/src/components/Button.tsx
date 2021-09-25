interface DefaultButtonProps {
	size?: "sm" | "md" | "lg"
	type ?: "submit" | "reset"
}

export const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
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

	const classNames = `text-white font-medium bg-blue-400 shaow-md rounded-md hover:bg-blue-600 ${sizeClassNames}`

	return (
		<button className={classNames} {...btnProps}>
			{props.children}
		</button>
	)
}
