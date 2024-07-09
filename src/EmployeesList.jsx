import PropTypes from "prop-types"
import EmployeeCard from "./EmployeeCard"
import { useEffect, useState } from "react"
import EmployeeInfo from "./EmployeeInfo"
import EmployeeButton from "./EmployeeButton"
import { useAnimate } from "framer-motion"

const transition = {
    duration: 0.4,
}

export default function EmployeesList({ employees, length, offset }) {
    const [selectedId, setSelectedId] = useState(0)
    const [rawSelectedId, setRawSelectedId] = useState(0)
    const [scopeImages, animateImages] = useAnimate()

    const imagesOffset = length % 2 == 0 ? 0 : -12
    const step = (val) => val * length * 24 * 2 + "rem"

    useEffect(() => {
        animateImages(
            scopeImages.current,
            {
                x: imagesOffset + "rem",
            },
            {duration: 0}
        )
    }, [])

    const addSelectedId = async (val) => {
        let nextRaw = rawSelectedId + val
        setRawSelectedId(nextRaw)
        setSelectedId((prev) => (prev + length + val) % length)
        let stepsSecond = Math.floor((nextRaw / length + 0.5) / 2)
        let stepsFirst = Math.floor((nextRaw / length + 1.5) / 2)

        animateImages(".images__firstHalf", {x: step(stepsFirst)}, {duration: 0})
        animateImages(".images__secondHalf", {x: step(stepsSecond)}, {duration: 0})

        animateImages(
            scopeImages.current,
            {
                x: nextRaw * -24 + imagesOffset + "rem",
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
                        className="flex flex-row justify-center" style={{width: "72rem"}}
                        ref={scopeImages}
                    >
                        {employees.map((val, id) => (
                            <EmployeeCard
                                employee={val}
                                key={id}
                                selectedId={selectedId}
                                className="images__firstHalf"
                            />
                        ))}

                        {employees.map((val, id) => (
                            <EmployeeCard
                                employee={val}
                                key={id + employees.length}
                                selectedId={selectedId}
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
