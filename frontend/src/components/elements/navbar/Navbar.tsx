import React from "react"
import "./navbar.scss"
import NavbarElement from "./navbar-element/NavbarElement.tsx"

type NavbarProps = {}

export const Navbar = (props: NavbarProps) => {
    const elements = [
        {
            label: "Eka",
            path: "",
        },
        {
            label: "FirsT",
            path: "",
        },
        {
            label: "Second",
            path: "",
        },
        {
            label: "Third",
            path: "",
        },
    ]

    return (
        <nav className="navbar">
            <ul>
                <NavbarElement label="frontpage" path="" start />
                {elements.map((element) => (
                    <NavbarElement
                        key={element.label}
                        label={element.label}
                        path={element.path}
                        icon={element.icon}
                    />
                ))}
                <NavbarElement label="footer" path="" end />
            </ul>
        </nav>
    )
}
export default Navbar
