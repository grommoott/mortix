import About from "@about/About"
import History from "@history/History"
import Header from "@header/Header"
import BestEmployees from "@employees/BestEmployees"
import Connection from "@connection/Connection"
import Footer from "@footer/Footer"

export default function App() {
    return (
        <>
            <Header />
            <About />
            <History />
            <BestEmployees />
            <Connection />
            <Footer />
        </>
    )
}
