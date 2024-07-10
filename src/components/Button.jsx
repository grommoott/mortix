import PropTypes from "prop-types"

function Button({ type = "common", onClick, children }) {
    let className

    switch (type) {
        case "common":
            className =
                "mx-3 uppercase shadow hover:shadow-lg rounded-lg border-none h-12 px-2 roboto-bold text-md bg-orange-500 hover:bg-orange-600 active:bg-orange-700 duration-100 hover:rounded-xl"
            break

        case "header":
            className =
                "mx-3 uppercase shadow hover:shadow-lg border-white rounded-lg text-white h-12 px-6 my-2 roboto-bold text-md bg-zinc-900 active:text-zinc-900 active:bg-white duration-100 hover:rounded-xl"
            break

        case "menu":
            className =
                "m-4 w-full uppercase shadow hover:shadow-lg border-white rounded-lg text-white h-12 px-6 my-2 roboto-bold text-md bg-zinc-900 active:text-zinc-900 active:bg-white duration-100 hover:rounded-xl"
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
    type: PropTypes.oneOf(["header", "common", "menu"]),
    onClick: PropTypes.func,
}

export default Button
