import React from "react"
import "./navbar.scss"
import NavbarElement from "./navbar-element/NavbarElement.tsx"

type NavbarProps = {}

export const Navbar = (props: NavbarProps) => {
    const elements = [
        {
            label: "zero",
            path: "",
            logo: <div>":)"</div>,
        },
        {
            label: "First",
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
        <div className="navbar">
            <NavbarElement label="frontpage" path="" />
            <ul>
                {elements.map((element) => (
                    <li key={element.label}>
                        <NavbarElement
                            label={element.label}
                            path={element.path}
                            logo={element.logo}
                        />
                    </li>
                ))}
            </ul>
            <NavbarElement label="footer" path="" />
        </div>
    )
}
export default Navbar
