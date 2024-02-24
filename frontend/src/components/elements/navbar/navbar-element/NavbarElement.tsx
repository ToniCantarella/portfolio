import React from "react"
import "./navbar-element.scss"

type NavbarElementType = {
    label: string
    icon?: JSX.Element
    path: string
}

export const NavbarElement = (props: NavbarElementType) => {
    return (
        <a href={props.path} className="navbar-element">
            {props.label}
        </a>
    )
}
export default NavbarElement
