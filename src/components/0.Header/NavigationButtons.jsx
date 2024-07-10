import PropTypes from "prop-types"
import Button from "@components/Button"

export default function NavigationButtons({ type, onClick = () => {} }) {
    return (
        <>
            <Button
                type={type}
                onClick={() => {
                    document
                        .querySelector(".about-yakor")
                        .scrollIntoView({ behavior: "smooth", block: "center" })

                    onClick()
                }}
            >
                О нас
            </Button>
            <Button
                type={type}
                onClick={() => {
                    document
                        .querySelector(".history-yakor")
                        .scrollIntoView({ behavior: "smooth", block: "center" })

                    onClick()
                }}
            >
                Наша история
            </Button>
            <Button
                type={type}
                onClick={() => {
                    document
                        .querySelector(".best-employees-yakor")
                        .scrollIntoView({ behavior: "smooth", block: "start" })

                    onClick()
                }}
            >
                Лучшие сотрудники
            </Button>
            <Button
                type={type}
                onClick={() => {
                    document
                        .querySelector(".connection-yakor")
                        .scrollIntoView({ behavior: "smooth", block: "center" })

                    onClick()
                }}
            >
                Как с нами связаться?
            </Button>
        </>
    )
}

NavigationButtons.propTypes = {
    type: PropTypes.oneOf(["header", "menu"]),
}
