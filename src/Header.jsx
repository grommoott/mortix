import Button from "./Button"
import fullLogo from "/fullLogo.png"
import config from "./config"
import { useState, useEffect, useRef } from "react"
import MenuButton from "./MenuButton"
import { motion, AnimatePresence } from "framer-motion"
import Tel from "./Tel"
import Menu from "./Menu"
import HeaderButtons from "./HeaderButtons"

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(() => window.innerWidth)
        })
    }, [windowWidth])

    return (
        <header
            className="fixed z-50 w-full bg-orange-500 h-25 flex flex-col xl:flex-row items-center justify-start duration-200 overflow-hidden "
            style={{ borderBottom: "3px black solid" }}
        >
            <div className="menu xl:w-auto">
                <MenuButton
                    className="mr-auto my-auto xl:hidden"
                    onClick={() => {
                        setIsMenuVisible(() => !isMenuVisible)
                    }}
                />

                <img
                    src={fullLogo}
                    className="xl:mx-4 mx-auto my-auto h-24 xl:h-16 hover:cursor-pointer hover:scale-110 active:scale-125 duration-100 select-none object-cover"
                    draggable="false"
                />

                <Tel className="ml-auto my-auto hidden md:block xl:hidden" />
            </div>

            <div className="flex-grow"></div>

            {windowWidth >= 1280 && <HeaderButtons />}
            {windowWidth < 1280 && (
                <Menu animate={isMenuVisible ? "show" : "hide"} className="z-10" />
            )}

            <div className="flex-grow"></div>

            <Tel className="hidden xl:block" />
        </header>
    )
}
