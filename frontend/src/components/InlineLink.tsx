interface InlineLinkProps {
	href?: string
}

const InlineLink: React.FC<InlineLinkProps> = ({ children, href }) => (
	<a href={href} className="hover:underline px-1">{children}</a>
)

export default InlineLink;
