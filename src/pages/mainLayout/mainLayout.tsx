import { Outlet } from "react-router-dom"
import {Header} from "../../components/header";
import {Nav} from "../../components/nav";

export function MainLayout() {
    return (
        <>
            <Header/>
            <Nav/>
            <Outlet/>
        </>
    )
}