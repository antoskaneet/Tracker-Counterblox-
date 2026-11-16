import { Outlet } from "react-router"
import { Sidebar } from "../widget/sidebar/ui/Sidebar"

export function MainLayout () {

    return (
        <>

        <h1>MAIN LAYOUT WORKS</h1>
        <Sidebar></Sidebar>
        <Outlet />
        
        </>


    )
}