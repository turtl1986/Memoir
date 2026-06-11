import { Route, Routes } from "react-router-dom";
import { MainLayout } from './pages/mainLayout'
import  './reset.css'
import  './main.css'
import {NoteEditor} from "./components/noteEditor";
import {Posts} from "./components/posts";
import {ControlPanel} from "./components/controlPanel";
import {TagsPage} from "./components/tags";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/add" element={<NoteEditor />} />
                    <Route path="/post/:id" element={<NoteEditor />} />
                    <Route path="/dashboard" element={<ControlPanel />} />
                    <Route path="/allNotes" element={<Posts />} />
                    <Route path="/tags" element={<TagsPage />} />
                </Route>
            </Routes>
        </>


    )
}

export default App