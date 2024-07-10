import NavigationButtons from "@header/NavigationButtons"

export default function HeaderButtons({className}) {
    return (
        <div className={
            "flex flex-row justify-center items-center flex-wrap  " +
            className
        }>
            <NavigationButtons type="header"/>
        </div>
    )
}
