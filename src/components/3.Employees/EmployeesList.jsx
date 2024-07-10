import PropTypes from "prop-types"
import EmployeeCard from "@employees/EmployeeCard"
import { useEffect, useState } from "react"
import EmployeeInfo from "@employees//EmployeeInfo"
import EmployeeButton from "@employees//EmployeeButton"
import { useAnimate } from "framer-motion"
import useWindowWidth from "@hooks/useWindowWidth"

const transition = {
    duration: 0.4,
    ease: "easeInOut"
}

export default function EmployeesList({ employees, length, offset }) {
    const [selectedId, setSelectedId] = useState(0)
    const [rawSelectedId, setRawSelectedId] = useState(0)
    const [scopeImages, animateImages] = useAnimate()
    const width = useWindowWidth()

    const cardWidth = width >= 1280 ? 24 : 16
    const imagesOffset = length % 2 == 0 ? 0 : -cardWidth / 2
    const step = (val) => val * length * cardWidth * 2 + "rem"

    useEffect(() => {
        animateImages(
            scopeImages.current,
            {
                x: imagesOffset + "rem",
            },
            { duration: 0 }
        )
    }, [])

    const addSelectedId = async (val) => {
        let nextRaw = rawSelectedId + val
        setRawSelectedId(nextRaw)
        setSelectedId((prev) => (prev + length + val) % length)
        let stepsSecond = Math.floor((nextRaw / length + 0.5) / 2)
        let stepsFirst = Math.floor((nextRaw / length + 1.5) / 2)

        animateImages(
            ".images__firstHalf",
            { x: step(stepsFirst) },
            { duration: 0 }
        )
        animateImages(
            ".images__secondHalf",
            { x: step(stepsSecond) },
            { duration: 0 }
        )

        animateImages(
            scopeImages.current,
            {
                x: nextRaw * -cardWidth + imagesOffset + "rem",
            },
            transition
        )
    }

    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <EmployeeButton type="left" addSelectedId={addSelectedId} />

                <div className="overflow-hidden">
                    <div
                        className="flex flex-row justify-center"
                        style={{ width: width >= 900 ? width >= 1280 ? "72rem" : "48rem" : "16rem" }}
                        ref={scopeImages}
                    >
                        {employees.map((val, id) => (
                            <EmployeeCard
                                employee={val}
                                key={id}
                                animate={selectedId == id ? "selected" : "idle"}
                                className="images__firstHalf"
                            />
                        ))}

                        {employees.map((val, id) => (
                            <EmployeeCard
                                employee={val}
                                key={id + employees.length}
                                animate={selectedId == id ? "selected" : "idle"}
                                className="images__secondHalf"
                            />
                        ))}
                    </div>
                </div>

                <EmployeeButton type="right" addSelectedId={addSelectedId} />
            </div>

            <EmployeeInfo employee={employees[selectedId]} />
        </>
    )
}

EmployeesList.propTypes = {
    employees: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            name: PropTypes.string,
            place: PropTypes.string,
            description: PropTypes.string,
        })
    ),
    length: PropTypes.number,
    offset: PropTypes.number,
}
