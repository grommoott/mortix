import Button from "./Button"
import { motion } from "framer-motion"

const variants = {
    show: {
        maxHeight: "16rem",
    },
    hide: {
        maxHeight: "0rem",
    },
}

const transition = {
    duration: 0.2,
    ease: "easeInOut",
}

export default function Menu({ className, animate }) {
    return (
        <div className="">
            <motion.div
                className={
                    "flex flex-row justify-center items-center flex-wrap " +
                    className
                }
                initial={{
                    maxHeight: "16rem",
                }}
                variants={variants}
                transition={transition}
                animate={animate}
            >
                <Button type="header">О нас</Button>
                <Button type="header">Наша история</Button>
                <Button type="header">Лучшие сотрудники</Button>
                <Button type="header">Как с нами связаться?</Button>
            </motion.div>
        </div>
    )
}
