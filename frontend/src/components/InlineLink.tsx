import React, { forwardRef, PropsWithChildren } from "react";

interface InlineLinkProps {
	href?: string
}

export const InlineLink = forwardRef<HTMLAnchorElement, PropsWithChildren<InlineLinkProps>>(({ href, children }, ref) => {
	return (
		<a href={href} ref={ref} className="hover:underline px-1">
			{children}
		</a>
	)
});

export default InlineLink;
