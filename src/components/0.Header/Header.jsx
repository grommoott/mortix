import fullLogo from "/fullLogoWhite.png"
import { useState, useEffect } from "react"
import MenuButton from "./MenuButton"
import Tel from "@header/Tel"
import Menu from "@header/Menu"
import HeaderButtons from "@header/HeaderButtons"

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
            className="fixed z-50 w-full bg-zinc-900 h-25 flex flex-col xl:flex-row items-center justify-start duration-200 overflow-hidden "
            // style={{ borderBottom: "3px black solid" }}
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
                    onClick={() => window.scrollTo({behavior: "smooth", top: 0})}
                />

                <Tel className="ml-auto my-auto hidden md:block xl:hidden text-white" />
            </div>

            <div className="flex-grow"></div>

            {windowWidth >= 1280 && <HeaderButtons />}
            {windowWidth < 1280 && (
                <Menu animate={isMenuVisible ? "show" : "hide"} className="z-10" setIsMenuVisible={setIsMenuVisible} />
            )}

            <div className="flex-grow"></div>

            <Tel className="hidden xl:block text-white" />
        </header>
    )
}
