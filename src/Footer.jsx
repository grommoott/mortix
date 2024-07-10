import fullLogo from "/fullLogoWhite.png"

export default function Footer() {
    return <footer className="mainFooter bg-zinc-900">
            <p className="text-white roboto-bold text-lg my-auto mx-auto lg:mx-0 lg:ml-auto select-none" draggable="false">© MortiX Corporation 2003 - 2024</p>
            <img src={fullLogo} className="h-36 my-auto mx-auto select-none" draggable="false"/>
            <p className="text-white roboto-bold text-lg my-auto mx-auto lg:mx-0 lg:mr-auto select-none" draggable="false">www.mortix.onrender.com</p>
    </footer>
}