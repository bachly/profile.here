import clsx from "clsx";

export default function PodWithMap({ mapImageSrc, description }) {
    return <div className={clsx(`pb-10/9 border-r border-b border-gray-200 relative`)}>
        {mapImageSrc ?
            <>
                <img className="absolute top-0 left-0 w-full h-full" src={mapImageSrc} />

                {description ?
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 py-4 pl-5 pr-16">
                        <div className="text-white text-sm font-semibold">
                            {description}
                        </div>
                    </div> : <></>}

                <button tabIndex="0" className="absolute bottom-0 right-0">
                    <div className="css-triangle-button">
                        <div className="css-triangle-button__corner border-gray-300"></div>
                        <div className="css-triangle-button__icon text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
                        </div>
                    </div>
                    <div className="sr-only">
                        View larger map
                    </div>
                </button>
            </> : <>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="py-5 px-4">
                        <div className={clsx('font-bold text-xl text-center')}>Location</div>
                    </div>
                </div>
            </>}
    </div>
}