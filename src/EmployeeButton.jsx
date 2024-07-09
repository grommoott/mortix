import PropTypes from "prop-types"
import arrowLeft from "/arrow-left.svg"
import arrowRight from "/arrow-right.svg"

export default function EmployeeButton({ type, addSelectedId }) {
    return (
        <img
            src={type === "left" ? arrowLeft : arrowRight}
            className="h-12 hover:scale-110 active:scale-125 duration-100 opacity-50 m-2"
            onClick={() => addSelectedId(type === "left" ? -1 : 1)}
            draggable="false"
        />
    )
}

EmployeeButton.propTypes = {
    type: PropTypes.oneOf(["left", "right"]),
    addSelectedId: PropTypes.func
}
