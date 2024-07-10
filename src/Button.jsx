import PropTypes from "prop-types"
import { useMemo } from "react"

function Button({ type = "common", onClick, children }) {
    let className

    switch (type) {
        case "common":
            className =
                "mx-3 uppercase shadow hover:shadow-lg rounded-lg border-none h-12 px-2 roboto-bold text-md bg-orange-500 hover:bg-orange-600 active:bg-orange-700 duration-100 hover:rounded-xl"
            break

        case "header":
            className =
                "mx-3 uppercase shadow hover:shadow-lg border-black rounded-lg h-12 px-6 my-2 roboto-bold text-md bg-orange-500 hover:bg-orange-600 active:bg-orange-700 duration-100 hover:rounded-xl"
            break
    }

    return (
        <button
            onClick={onClick}
            className={className}
            style={{ borderWidth: "3px" }}
        >
            {children}
        </button>
    )
}
Button.propTypes = {
    type: PropTypes.oneOf(["header", "common"]),
    onClick: PropTypes.func,
}

export default Button
