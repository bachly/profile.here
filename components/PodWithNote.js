import clsx from "clsx";

export default function PodWithNote({ title, description = '', author = '' }) {
    return <div className={clsx(`pb-10/9 border-r border-gray-300 relative`)}>
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="pt-4 pb-3 px-4 h-full flex flex-col justify-between">
                <div className={clsx('font-bold text-xl text-center')}>{title}</div>
                <div className="flex-1 max-h-5/6 overflow-hidden">
                    <div className="pt-8 px-2 italic text-sm text-lg font-serif">{description}</div>
                </div>
                {author ?
                    <div className="pt-2 font-bold text-sm text-right">- {author}</div>
                    : <></>}
            </div>
        </div>
        <div className="absolute top-20 left-2 z-4 opacity-10">
            <img src="/img/quotation-mark.svg" />
        </div>
        <div className="absolute bottom-2 right-4 z-0 opacity-10" style={{ transform: "rotate(180deg)" }}>
            <img src="/img/quotation-mark.svg" />
        </div>
    </div>
}