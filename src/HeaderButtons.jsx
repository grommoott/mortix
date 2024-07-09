import Button from "./Button"

export default function HeaderButtons({className}) {
    return (
        <div className={
            "flex flex-row justify-center items-center flex-wrap " +
            className
        }>
            <Button type="header">О нас</Button>
            <Button type="header">Наша история</Button>
            <Button type="header">Лучшие сотрудники</Button>
            <Button type="header">Как с нами связаться?</Button>
        </div>
    )
}
