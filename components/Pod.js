import clsx from "clsx";

export default function Pod({ id, isEditing, children, title, subtitle }) {
    return <div data-cypress={id} className={clsx(`lg:pb-10/9 border-r border-b border-gray-200 relative`, isEditing ? 'bg-black' : '')}>
        <div className="lg:absolute top-0 left-0 w-full h-full">
            <div className="py-5 px-4">
                <div className={clsx('font-bold text-xl text-center', isEditing ? 'text-white' : '')}>{title}</div>
                <div className="italic text-center text-sm">{subtitle || <>&nbsp;</>}</div>
                <div className="pt-4"></div>
                <div className="" style={{ minHeight: '200px' }}>
                    {children}
                </div>
            </div>
        </div>
    </div>
}