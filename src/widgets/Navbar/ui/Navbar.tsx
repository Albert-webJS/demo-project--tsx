import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'

import { AppLink } from 'shared/ui/AppLink/AppLink'

import styles from './Navbar.module.css'

interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Navbar = ({ className, ...props}: NavbarProps) => {
  return (
        <nav className={cn(styles.navigation, className)} {...props}>
            <AppLink theme="primary" to={'/'} >Home</AppLink>
            <AppLink to={'/about'} >About</AppLink>
        </nav>
  )
}