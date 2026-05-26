import { Route, Routes } from "react-router-dom";
import { MainLayout } from './pages/mainLayout'
import  './reset.css'
import  './main.css'
import {NoteEditor} from "./components/noteEditor";
import {Posts} from "./components/posts";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/add" element={<NoteEditor />} />
                    <Route path="/allNotes" element={<Posts />} />
                </Route>
            </Routes>
        </>


    )
}

export default App