import arrowLeft from "/arrow-leftWhite.svg"
import arrowRight from "/arrow-rightWhite.svg"
import PropTypes from "prop-types"

export default function PageSwapButton({ addPage, direction }) {
    return (
        <img
            src={direction == "left" ? arrowLeft : arrowRight}
            onClick={() => addPage((direction == "left" ? -1 : 1))}
            className="h-8 sm:h-12 cursor-pointer hover:scale-110 active:scale-125 duration-100"
        />
    )
}

PageSwapButton.propTypes = {
    addPage: PropTypes.func,
    direction: PropTypes.oneOf(["left", "right"]),
}
