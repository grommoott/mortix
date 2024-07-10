import EmployeeButton from "./EmployeeButton"
import EmployeesList from "./EmployeesList"
import employees from "./employees"
import shapes from "/shapes.png"

export default function BestEmployees() {
    return (
        <div style={{
            background: "url(/shapes.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
        }}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center px-auto mx-4 pt-8 lg:pt-12 roboto-bold">
                ЛУЧШИЕ СОТРУДНИКИ
            </h1>
            <EmployeesList
                employees={employees}
                length={employees.length}
                offset={2}
            />
        </div>
    )
}
