import EmployeesList from "@employees/EmployeesList"
import employees from "@data/employees"
import { motion } from "framer-motion"
import animations from "@data/animations"
import transitions from "@data/transitions"

export default function BestEmployees() {
    return (
        <div
            style={{
                background: "url(/shapes.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                position: "relative",
            }}
        >
            <div className="best-employees-yakor absolute -top-28 xl:-top-20"></div>
            <motion.h1
                className="text-4xl sm:text-5xl lg:text-7xl text-center px-auto mx-4 mt-12 lg:mt-16 roboto-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={transitions.header}
                variants={animations.header}
            >
                ЛУЧШИЕ СОТРУДНИКИ
            </motion.h1>

            <EmployeesList
                employees={employees}
                length={employees.length}
                offset={2}
            />
        </div>
    )
}
