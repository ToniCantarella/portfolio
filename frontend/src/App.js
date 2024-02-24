import "./App.css"
import Navbar from "./components/elements/navbar/Navbar.tsx"
import TestComponent from "./components/test/TestComponent.tsx"

function App() {
    return (
        <div className="App">
            <Navbar />
            <TestComponent label="Hello world" />
        </div>
    )
}

export default App
