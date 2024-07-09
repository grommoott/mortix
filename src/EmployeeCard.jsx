import PropTypes from "prop-types"
import { useEffect } from "react"
import { motion } from "framer-motion"

const variants = {
    selected: {
        scale: 1,
        opacity: 1
    }, 
    idle: {
        scale: 0.7,
        opacity: 0.7
    }
}

const transition = {
    duration: 0.4,
    ease: "easeInOut"
}

export default function EmployeeCard({ employee, selectedId, className }) {
    return <motion.img
            src={`/best-employees/${employee.id}.jpg`}
            className={"w-64 h-96 m-16 object-cover rounded-2xl shadow-lg select-none " + className}
            draggable="false"
            variants={variants}
            animate={selectedId == employee.id ? "selected" : "idle"}
            transition={transition}
        />
}

EmployeeCard.propTypes = {
    employees: PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        place: PropTypes.string,
        description: PropTypes.string,
    }),
    selectedId: PropTypes.number,
}
