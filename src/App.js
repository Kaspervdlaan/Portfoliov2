import Header from "./components/Header";
import Pages from "./pages/Pages";
import {useState} from "react";

function App() {
    const [active, setActive] = useState("");

    const handleClickNone = () => {
        setActive("");
    }

    const handleClickProjects = () => {
        setActive("projects");
    }

    const handleClickAbout = () => {
        setActive("about");
    }

    const handleClickContact = () => {
        setActive("contact");
    }

    return (
        <div className="bg-dark-color ">
            <Header
                state={active}
                setNone={handleClickNone}
                setProjects={handleClickProjects}
                setAbout={handleClickAbout}
                setContact={handleClickContact}
            />
            <Pages
                state={active}
                setNone={handleClickNone}
                setProjects={handleClickProjects}
                setAbout={handleClickAbout}
                setContact={handleClickContact}
            />
        </div>
    );
}

export default App;
