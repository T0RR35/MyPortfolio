import { useLocation, useOutlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import "./Layout.css";

export default function Layout() {
    const location = useLocation();
    const outlet = useOutlet(); // tipo que "congela" a rota atual para o exit funcionar
    return (
        <div className="layout">
            <aside className="sidebar">
                <SideBar />
            </aside>

            <main className="main">
                <AnimatePresence
                    mode="wait"
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.20, ease: "easeOut" }}
                    >
                        {outlet}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}