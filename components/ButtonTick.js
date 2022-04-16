import clsx from "clsx"

export default function ButtonTick({ text, type = "submit", success }) {
    return <button type={type} className={clsx(success ? "text-green-500" : "text-gray-400", "fill-current hover:opacity-70 duration-200 transition")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
        </svg>
        <div className="sr-only">{text}</div>
    </button>
} 