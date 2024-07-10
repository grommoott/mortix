import useWindowWidth from "@hooks/useWindowWidth"
import history from "@data/history"
import { useState } from "react"
import PageSwapButton from "./PageSwapButton"
import PageIndicator from "./PageIndicator"
import { useAnimate } from "framer-motion"
import { motion } from "framer-motion"
import animations from "@data/animations"
import transitions from "@data/transitions"

export default function History() {
    const width = useWindowWidth()
    const [selectedPage, setSelectedPage] = useState(0)
    const pages = history.length
    const [pagesScope, animatePages] = useAnimate()
    const pageWidth = width >= 640 ? (width >= 1024 ? 40 : 30) : 20

    function addPage(val) {
        let nextSelectedPage = Math.max(
            0,
            Math.min(pages - 1, selectedPage + val)
        )
        setSelectedPage(nextSelectedPage)

        animatePages(
            pagesScope.current,
            { x: -pageWidth * nextSelectedPage + "rem" },
            { duration: 0.2, ease: "easeInOut" }
        )
    }

    return (
        <div
            className="overflow-hidden relative history-yakor"
            style={{ height: "100vh" }}
        >
            <div className="flex flex-row h-full w-full justify-around absolute">
                <div
                    className="flex flex-col justify-center items-center z-10 flex-shrink-0 "
                    style={{ width: width >= 1024 ? "60vw" : "90vw" }}
                >
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={transitions.header}
                        variants={animations.header}
                        className="text-6xl lg:text-8xl text-shadow text-white roboto-bold p-1 lg:p-4"
                    >
                        НАША ИСТОРИЯ
                    </motion.h1>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={transitions.content}
                        variants={animations.content}
                        className="overflow-hidden bg-black/50 backdrop-blur rounded-2xl m-8 historyPage"
                        style={{ maxHeight: "75%" }}
                    >
                        <div
                            className="flex flex-row justify-start items-center"
                            ref={pagesScope}
                        >
                            {history.map((val, id) => (
                                <div key={id}>
                                    <div className="historyPage flex flex-row items-center">
                                        <p className="text-xl lg:text-2xl text-shadow text-center text-white roboto-bold w-fit h-fit my-auto p-6">
                                            {val}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="flex flex-row">
                        <PageSwapButton direction="left" addPage={addPage} />
                        <PageIndicator
                            selectedPage={selectedPage}
                            pages={pages}
                        />
                        <PageSwapButton direction="right" addPage={addPage} />
                    </div>
                </div>

                <div className="hidden lg:block"></div>
                <div className="hidden lg:block"></div>
            </div>

            <div className="historyImageBg w-full h-full absolute"></div>

            <div
                style={{
                    background: 'right url("/history-bg-fixed.jpg")',
                    height: "100vh",
                    backgroundSize: "cover",
                }}
            ></div>
        </div>
    )
}
