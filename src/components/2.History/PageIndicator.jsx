import { motion } from "framer-motion"

const variants = {
    selected: {
        scale: 2,
    },
    default: {
        scale: 1,
    },
}

const transition = {
    duration: 0.1,
    ease: "easeInOut",
}

export default function PageIndicator({ pages, selectedPage }) {
    const array = new Array()

    for (let i = 0; i < pages; i++) {
        array.push(i)
    }

    return (
        <div className="flex flex-row justify-center items-center">
            {array.map((_, id) => {
                return (
                    <motion.div
                        className="size-2 bg-white m-2 rounded"
                        variants={variants}
                        transition={transition}
                        key={id}
                        animate={selectedPage == id ? "selected" : "default"}
                    ></motion.div>
                )
            })}
        </div>
    )
}
