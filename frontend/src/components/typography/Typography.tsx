import { FunctionComponent } from "react";

interface HeaderProps {
    level?: 1 | 2 | 3 | 5 | 6;
    textSize?: string
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Header: FunctionComponent<HeaderProps> = ({ level = 1, textSize = "text-2xl", children }) => {
    const Tag = `h${level}` as HeadingTag;

    return (
        <Tag className={`${textSize} font-header font-extrabold text-blue dark:text-white`}>
            {children}
        </Tag>
    )
};

export const MutedText: FunctionComponent = ({ children }) => (
    <p className="font-normal text-md md:text-lg text-gray dark:text-light-gray-1">{children}</p>
);

export const FooterText: FunctionComponent = ({ children }) => (
    <span className="font-action text-sm text-dark-gray-1">{children}</span>
);
