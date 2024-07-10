export default function ConnectionType({ name, value, delay, onClick }) {
    return (
        <div
            className="mx-auto flex flex-row cursor-pointer hover:scale-105 active:scale-110 duration-100"
            onClick={() => {
                navigator.clipboard.writeText(value)
                onClick()
            }}
        >
            {name !== "" && (
                <img
                    src={`/connection-types/${name}.svg`}
                    className="h-8 sm:h-14 select-none"
                    draggable="false"
                />
            )}
            <p
                className="uppercase roboto-light text-2xl sm:text-4xl text-center text-nowrap m-2 select-none"
                draggable="false"
            >
                {value}
            </p>
        </div>
    )
}
