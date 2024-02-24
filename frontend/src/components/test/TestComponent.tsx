import React from "react"
import "./testStyles.scss"

type TestComponentProps = {
    label: string
}

export const TestComponent = (props: TestComponentProps) => {
    return <div className="test">{props.label}</div>
}
export default TestComponent
