import PropTypes from "prop-types"
import arrowLeft from "/arrow-left.svg"
import arrowRight from "/arrow-right.svg"
import { useState } from "react"

export default function EmployeeButton({ type, addSelectedId }) {
    const [coolDown, setCoolDown] = useState(true)

    return (
        <img
            src={type === "left" ? arrowLeft : arrowRight}
            className="h-8 sm:h-12 hover:scale-110 active:scale-125 duration-100 opacity-50 m-1 sm:m-2 cursor-pointer"
            onClick={() => {
                if (coolDown) {
                    addSelectedId(type === "left" ? -1 : 1)
                    setCoolDown(false)
                    setTimeout(() => setCoolDown(true), 200)
                }
            }}
            draggable="false"
        />
    )
}

EmployeeButton.propTypes = {
    type: PropTypes.oneOf(["left", "right"]),
    addSelectedId: PropTypes.func,
}
