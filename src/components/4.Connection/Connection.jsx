import { useAnimate } from "framer-motion"
import ConnectionType from "@connection/ConnectionType"
import CopiedToClipboard from "@connection/CopiedToClipboard"
import connections from "@data/connections"
import { useEffect } from "react"
import { motion } from "framer-motion"
import animations from "@data/animations"
import transitions from "@data/transitions"

export default function Connection() {
    const [clipboardScope, animateClipboard] = useAnimate()

    useEffect(() => {
        animateClipboard(
            clipboardScope.current,
            { opacity: 0 },
            { duration: 0 }
        )
    }, [])

    return (
        <div className="bg-white w-full connection-yakor">
            <motion.h1
                className="text-4xl sm:text-6xl roboto-bold text-center mt-10 sm:mt-16 mx-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={transitions.header}
                variants={animations.header}
            >
                КАК С НАМИ СВЯЗАТЬСЯ?
            </motion.h1>
            <motion.p
                className="text-xl roboto-regular text-center w-2/3 mx-auto mt-10 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={transitions.content}
                variants={animations.content}
            >
                Если хотите сделать заказ, то пишите нам на почту или в Telegram
                или WhatsApp, наши менеджеры свяжутся с вами в течении часа.
                Также вы можете позвонить нам.
            </motion.p>
            <motion.div
                className="connections p-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={transitions.item}
                variants={animations.item}
            >
                {connections.map((val, id) => (
                    <ConnectionType
                        key={id}
                        name={val.name}
                        value={val.value}
                        onClick={() =>
                            animateClipboard(
                                clipboardScope.current,
                                {
                                    opacity: [0, 1, 0],
                                    y: ["5rem", "0rem", "0rem"],
                                    scale: [0.5, 1, 1],
                                },
                                {
                                    duration: 2,
                                    times: [0, 0.2, 1],
                                    ease: "anticipate",
                                }
                            )
                        }
                    />
                ))}
            </motion.div>
            <p className="roboto-light text-md sm:text-xl text-center text-gray-400 pb-8">
                Нажмите на контакт, чтобы его скопировать
            </p>
            <CopiedToClipboard ref={clipboardScope} />
        </div>
    )
}
