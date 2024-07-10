import PropTypes from "prop-types"
import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"

export default function EmployeeInfo({ employee }) {
    const [scopeH2, animateH2] = useAnimate()
    const [scopeH3, animateH3] = useAnimate()
    const [scopeP, animateP] = useAnimate()

    useEffect(() => {
        animateH2(
            scopeH2.current,
            { y: ["3rem", "0"], opacity: [0, 1] },
            { duration: 0.4 }
        )
        animateH3(
            scopeH3.current,
            { y: ["4rem", "0"], opacity: [0, 1] },
            { duration: 0.4 }
        )
        animateP(
            scopeP.current,
            { y: ["5rem", "0"], opacity: [0, 1] },
            { duration: 0.4 }
        )
    }, [employee])

    return (
        <div
            className="flex flex-col items-center"
            style={{height: "25rem"}}
        >
            <h2 ref={scopeH2} className="text-center roboto-bold text-4xl p-3">
                {employee.name}
            </h2>
            <h3
                ref={scopeH3}
                className="text-center roboto-regular text-2xl p-2"
            >
                {employee.place}
            </h3>
            <p
                ref={scopeP}
                className="text-center roboto-light text-xl w-60 sm:w-1/3 p-1"
                style={{ textShadow: "0 2px 10px #ffffff" }}
            >
                {employee.description}
            </p>
        </div>
    )
}

EmployeeInfo.propTypes = {
    employee: PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        place: PropTypes.string,
        description: PropTypes.string,
    }),
}
