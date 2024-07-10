import menu from "/menuWhite.svg"

export default function MenuButton({onClick, className}) {
    return (
        <img src={menu} onClick={onClick} className={"m-4 h-16 hover:scale-110 active:scale-125 duration-100 cursor-pointer " + className}/>
    )
}