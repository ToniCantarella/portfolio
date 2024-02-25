import React from "react"
import "./navbar-element.scss"

type NavbarElementType = {
    label: string
    icon?: JSX.Element
    path: string
    start?: boolean
    end?: boolean
}

export const NavbarElement = (props: NavbarElementType) => {
    const alignmentClassName = (): string => {
        if (props.start) return " start"
        else if (props.end) return " end"
        else return ""
    }

    return (
        <li className={`navbar-element${alignmentClassName()}`}>
            {props.icon}
            <a href={props.path}>{props.label}</a>
        </li>
    )
}
export default NavbarElement
