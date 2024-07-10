import { forwardRef } from "react"
import clipboard from "/clipboard.svg"

export default forwardRef(function CopiedToClipboard(_, ref) {
    return (
        <div className="w-full fixed bottom-24 pointer-events-none z-50" ref={ref}>
            <div
                className="flex flex-row justify-center items-center w-fit h-fit border-4 border-zinc-900 bg-white text-zinc-900 p-2 select-none  mx-auto"
                style={{ borderRadius: "3.25rem" }}
            >
                <p className="roboto text-xl mx-2">Скопировано!</p>
                <img src={clipboard} className="h-10 mx-2" />
            </div>
        </div>
    )
})
