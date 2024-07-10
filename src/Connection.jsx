import ConnectionType from "./ConnectionType"

const connections = [
    {name: "", value:"mortiXxX@gmail.com"},
    {name: "telegram", value:"mortixxxbuild"},
    {name: "whatsapp", value:"+7 777 777 77 77"},
]

export default function Connection() {
    return (
        <div className="bg-white w-full">
            <h1 className="text-4xl sm:text-6xl roboto-bold text-center mt-10 sm:mt-16 mx-2">
                КАК С НАМИ СВЯЗАТЬСЯ?
            </h1>
            <p className="text-xl roboto-regular text-center w-2/3 mx-auto mt-10 mb-8">
                Если хотите сделать заказ, то пишите нам на почту или в Telegram
                или WhatsApp, наши менеджеры свяжутся с вами в течении часа.
                Также вы можете позвонить нам.
            </p>
            <div className="flex flex-col xl:flex-row justify-center xl:justify-around items-center p-4">
                {connections.map((val) => <ConnectionType name={val.name} value={val.value}/>)}
            </div>
            <p className="roboto-light text-md sm:text-xl text-center text-gray-400 pb-8">Нажмите на контакт, чтобы его скопировать</p>
        </div>
    )
}
