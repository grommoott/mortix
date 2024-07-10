import { motion } from "framer-motion"
import NavigationButtons from "@header/NavigationButtons"

const variants = {
    show: {
        top: "0rem",
    },
    hide: {
        top: "-16rem",
    },
}

const variantsContainer = {
    show: {
        height: "16rem",
    },
    hide: {
        height: "0rem",
    },
}

const transition = {
    duration: 0.2,
}

export default function Menu({ className, animate, setIsMenuVisible }) {
    return (
        <motion.div
            className="w-full overflow-hidden"
            initial={{ height: "16rem" }}
            transition={transition}
            variants={variantsContainer}
            animate={animate}
        >
            <motion.div
                className={
                    "flex flex-col justify-center items-center w-full relative px-4 " +
                    className
                }
                initial={{
                    top: "0rem",
                }}
                variants={variants}
                transition={transition}
                animate={animate}
            >
                <NavigationButtons type="menu" onClick={() => setIsMenuVisible(false)}/>
            </motion.div>
        </motion.div>
    )
}
