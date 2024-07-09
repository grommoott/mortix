import EmployeeButton from "./EmployeeButton"
import EmployeesList from "./EmployeesList"
import employees from "./employees"

export default function BestEmployees() {
    return (
        <>
            <h1 className="text-5xl lg:text-7xl text-center p-16 roboto-bold">
                ЛУЧШИЕ СОТРУДНИКИ
            </h1>
            <EmployeesList employees={employees} length={employees.length} offset={2}/>
            <div className="mb-40"></div>
        </>
    )
}
