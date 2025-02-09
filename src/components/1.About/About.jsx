import fullLogo from "/fullLogoWhite.png"
import { motion } from "framer-motion"
import animations from "@data/animations"
import transitions from "@data/transitions"

export default function About() {
    console.log(transitions.header)
    return (
        <div
            className="overflow-hidden relative"
            style={{ height: "calc(100vh + 6.25rem)" }}
        >
            <div className="flex flex-col justify-center items-center absolute w-full h-fit z-10 mt-12">
                <img
                    src={fullLogo}
                    className="pt-10 h-40 sm:h-60 lg:h-72 xl:h-96 select-none"
                    draggable="false"
                />
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={transitions.header}
                    variants={animations.header}
                    className="text-5xl sm:text-7xl lg:text-8xl text-shadow text-white roboto-bold p-1 lg:p-4 about-yakor"
                >
                    О НАС
                </motion.h1>
                <motion.h2
                    className="text-2xl lg:text-3xl text-shadow w-11/12 lg:w-3/4 text-center text-white roboto-bold p-1 lg:p-4 overflow-y-visible"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={transitions.content}
                    variants={animations.content}
                >
                    Наша компания - Мортикс занимается строительством домов на
                    заказ, а также ремонтом жилых помещений. Мы можем уложить
                    плитку, наклеить обои, установить розетки и многое другое
                </motion.h2>
                <div className="h-60"></div>
            </div>

            <div className="aboutImageBg w-full h-full absolute"></div>

            <div
                style={{
                    background: 'top url("/about-bg.jpeg")',
                    height: "100%",
                }}
            ></div>
        </div>
    )
}
