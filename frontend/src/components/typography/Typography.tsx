import { FunctionComponent } from "react";
import styles from "./typography.module.css";

interface HeaderProps {
    level?: 1 | 2 | 3 | 5 | 6;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Header: FunctionComponent<HeaderProps> = ({ level = 1, children }) => {
    const Tag = `h${level}` as HeadingTag;

    return (
        <Tag className={styles.header}>{children}</Tag>
    )
};

export const MutedText: FunctionComponent = ({ children }) => (
    <p className={styles.muted}>{children}</p>
);

export const FooterText: FunctionComponent = ({ children }) => (
    <span className={styles.footer}>{children}</span>
);
