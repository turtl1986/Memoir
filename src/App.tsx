import { Route, Routes } from "react-router-dom";
import { MainLayout } from './pages/mainLayout'

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<h1>Home page</h1>}/>

                </Route>
            </Routes>
        </>


    )
}

export default App