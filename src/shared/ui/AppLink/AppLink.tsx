import { Link, LinkProps } from "react-router-dom"
import cn from 'classnames';

import styles from './AppLink.module.css';

interface AppLinkProps extends LinkProps {
    theme?: "primary" | "secondary"
}

export const AppLink = ({ to, className, theme, children, ...props}: AppLinkProps): JSX.Element => {
    return (
        <Link 
            to={to} 
            className={cn(styles.link, className, {
                [styles[theme]]: theme
            })} 
            {...props}
    >
        {children}
      </Link>)
}