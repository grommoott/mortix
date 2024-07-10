import { useState } from "react"
import About from "./About"
import History from "./History"
import Header from "./Header"
import { AnimatePresence, useAnimate } from "framer-motion"
import Menu from "./Menu"
import BestEmployees from "./BestEmployees"
import Connection from "./Connection"
import Footer from "./Footer"

export default function App() {
    return (
        <>
            <Header />
            <About />
            <History />
            <BestEmployees />
            <Connection />
            <Footer />
        </>
    )
}
