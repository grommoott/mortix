import config from "@data/tel"

export default function Tel({className}) {
    return (
        <a
            className={"text-2xl roboto-bold m-4 hover:scale-110 duration-100 text-nowrap w-min " + className}
            href={"tel: " + config.tel}
        >
            {config.tel}
        </a>
    )
}
