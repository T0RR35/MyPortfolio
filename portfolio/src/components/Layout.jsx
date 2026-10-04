import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import "./Layout.css";

export default function Layout() {
    return (
        <div className="layout">
            <aside className="sidebar">
                <SideBar />
            </aside>

            <main className="main">
                <Outlet />
            </main>
        </div>
    );
}