import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "next-themes";
//import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";
import './App.css'

function App() {

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
    </ThemeProvider>
  )
}

export default App
