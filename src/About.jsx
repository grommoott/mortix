import bg from "/about-bg.jpeg"

export default function About() {
    return (
        <div className="overflow-hidden relative" style={{ height: "calc(100vh + 6.25rem)" }}>
            <div className="flex flex-col justify-center items-center absolute w-full h-full z-10 mt-12">
                <h1 className="text-7xl lg:text-9xl text-shadow text-white roboto-bold p-1 lg:p-4" style={{borderBottom: "4px white solid"}}>О НАС</h1>
                <h2 className="text-2xl lg:text-4xl text-shadow w-11/12 lg:w-3/4 text-center text-white roboto-bold p-1 lg:p-4 overflow-y-scroll">
                    Наша компания - Мортикс занимается строительством домов на
                    заказ, а также ремонтом жилых помещений. Мы можем уложить
                    плитку, наклеить обои, установить розетки и многое другое
                </h2>
            </div>

            <div className="aboutImageBg w-full h-full absolute"></div>

            <div
                style={{
                    background: 'top url("/about-bg.jpeg")',
                    height: "100%",
                }}
            ></div>
        </div>
    )
}
