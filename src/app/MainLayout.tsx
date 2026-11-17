import { Outlet } from "react-router";
import { Sidebar } from "../widget/sidebar/ui/Sidebar";
import { Title } from "../widget/title/Title";
import "./MainLayout.css";

export function MainLayout() {
    return (
        <div className="main-layout">
            <Title />

            <div className="content">
                <Sidebar />

                <main className="workspace">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}