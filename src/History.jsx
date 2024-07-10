import { useEffect } from "react"
import historyBg from "/history-bg.jpg"
import useWindowWidth from "./hooks/useWindowWidth"

export default function History() {
    const width = useWindowWidth()

    return (
        <div className="overflow-hidden relative" style={{ height: "100vh" }}>
            <div className="flex flex-row h-full w-full justify-around absolute">
                <div
                    className="flex flex-col justify-center items-center z-10 flex-shrink-0 "
                    style={{ width: width >= 1024 ? "60vw" : "90vw" }}
                >
                    <h1
                        className="text-6xl lg:text-8xl text-shadow text-white roboto-bold p-1 lg:p-4"
                        style={{ borderBottom: "4px white solid" }}
                    >
                        НАША ИСТОРИЯ
                    </h1>
                    <div className="flex flex-col flex-nowrap overflow-y-scroll" style={{maxHeight: "75%"}}>
                        <p className="text-xl lg:text-2xl text-shadow text-pretty text-white roboto-bold p-1 lg:p-4">
                            История нашей компании началась в 2003 году, когда
                            наш первый генеральный директор Андрей Кирпичёв
                            решил построить дачу понял, что на рынке
                            недостаточно предложений по строительству домов.
                        </p>
                        <p className="text-xl lg:text-2xl text-shadow text-pretty text-white roboto-bold p-1 lg:p-4">
                            Тогда он с компанией друзей основал компанию,
                            которая изначально называлась «Мортиз», однако
                            после, в честь выхода фильма «Люди Икс: Последняя
                            битва» (наш директор был фанатом этой вселенной) в
                            2006 году компания была переименована в «MortiX».
                        </p>
                        <p className="text-xl lg:text-2xl text-shadow text-pretty text-white roboto-bold p-1 lg:p-4">
                            В 2008 году компания немного изменила направление:
                            мы начали принимать заказы по ремонту квартир
                        </p>
                        <p className="text-xl lg:text-2xl text-shadow text-pretty text-white roboto-bold p-1 lg:p-4">
                            В 2015 году Андрей ушёл на пенсию, его место занял
                            Алексей Штукатуркин который является главным и по
                            сей день.
                        </p>
                    </div>
                </div>

                <div className="hidden lg:block"></div>
                <div className="hidden lg:block"></div>
            </div>

            <div className="historyImageBg w-full h-full absolute"></div>

            <div
                style={{
                    background: 'right url("/history-bg-fixed.jpg")',
                    height: "100vh",
                    backgroundSize: "cover",
                }}
            ></div>
        </div>
    )
}
