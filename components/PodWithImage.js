import clsx from "clsx";

export default function PodWithImage({ imageSrc, children, alt }) {
    return <div className={clsx(`pb-10/9 border-r border-gray-300 relative`)}>
        <figure>
            {imageSrc ?
                <div className="absolute top-0 left-0 w-full h-full bg-image bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }} alt={alt} />
                : <>
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-100" />
                </>}

            {children ?
                <figcaption className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 py-4 pl-5 pr-16">
                    <div className="text-white text-sm font-semibold">
                        {children}
                    </div>
                </figcaption> : <></>}
        </figure>
    </div>
}