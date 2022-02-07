import { FunctionComponent } from "react";

interface HeaderProps {
    level?: 1 | 2 | 3 | 5 | 6;
    textSize?: string;
    textColor?: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Header: FunctionComponent<HeaderProps> = ({ level = 1, textSize = "text-3xl", textColor = "text-blue dark:text-white", children }) => {
    const Tag = `h${level}` as HeadingTag;

    return (
        <Tag className={`${textSize} font-header font-extrabold ${textColor}`}>
            {children}
        </Tag>
    )
};

interface MutedTextProps {
    textSize?: string;
}

export const MutedText: FunctionComponent<MutedTextProps> = ({ textSize = "text-md md:text-lg", children }) => (
    <p className={`font-text text-gray dark:text-light-gray-1 ${textSize}`}>{children}</p>
);

export const FooterText: FunctionComponent = ({ children }) => (
    <span className="font-action text-xs text-dark-gray-1">{children}</span>
);

interface SubheaderProps extends Omit<HeaderProps, "level"> {

}

export const Subheader: FunctionComponent<SubheaderProps> = ({ textSize = "text-md", textColor = "text-light-blue", children }) => (
    <span className={`${textSize} font-action font-medium ${textColor}`}>{children}</span>
);
