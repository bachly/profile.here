import clsx from 'clsx';
import React from 'react';
import ButtonTick from './ButtonTick';
import useAxios from 'axios-hooks'
import IconError from './IconError';
import { UserProfileContext } from '../lib/reactContexts';

export default function ProfileLocation() {
    const [isEditing, setIsEditing] = React.useState(false);
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);
    const [locationInput, setLocationInput] = React.useState();

    const [{
        data: successValidatingLocation,
        loading: isValidatingLocation,
        error: errorValidatingLocation },
        validateLocation
    ] = useAxios(
        {
            url: '/api/validateLocation',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
            data: JSON.stringify({
                location: locationInput
            })
        },
        { manual: true }
    )

    React.useEffect(() => {
        if (successValidatingLocation?.data?.validatedLocation) {
            setIsEditing(false);

            setUserProfile({
                location: {
                    validatedLocation: successValidatingLocation?.data?.validatedLocation,
                    mapImageSrc: successValidatingLocation?.data?.mapImageSrc
                }
            })
        }
    }, [successValidatingLocation])

    React.useEffect(function onload() {
        window.addEventListener('click', function (event) {
           setIsEditing(false);
        })
    }, [])

    async function handleOnSubmit(event) {
        event && event.preventDefault();
        if (locationInput) {
            try {
                await validateLocation();
            } catch (err) {
                console.error("Error caught here", err);
                setIsEditing(false);
            }
        }
    }

    function handleClickToEditLocation(event) {
        event && event.preventDefault();
        setIsEditing(true);
    }

    function handleInputLocation(event) {
        event && event.preventDefault();
        setLocationInput(event.target.value);
    }

    function stopPropagation(event) {
        event && event.stopPropagation();
    }

    return <div onClick={stopPropagation}>
        {isEditing ?
            <>
                <form onSubmit={handleOnSubmit} className={clsx(`w-full bg-white border border-gray-300 -ml-2 flex items-center justify-between relative`)}>
                    <input autoFocus
                        defaultValue={locationInput}
                        className={clsx('font-bold top-0 left-0 w-full px-2 disabled:opacity-50', isValidatingLocation ? 'cursor-wait' : '')}
                        disabled={isValidatingLocation}
                        onChange={handleInputLocation}
                    ></input>
                    <div className="absolute h-full top-0 right-1 flex items-center">
                        {isValidatingLocation ? <>
                            <div className="text-xs text-gray-300 cursor-wait">Validating city...</div>
                        </> :
                            <ButtonTick />}
                    </div>
                </form>
            </> :
            <>
                {errorValidatingLocation ?
                    <button onClick={handleClickToEditLocation} className="w-full font-bold cursor-default px-2 -ml-2 border border-transparent">
                        <div className="w-full flex items-center justify-start">
                            <div>{locationInput}</div>
                            <IconError text={"Error validating location"} />
                        </div>
                    </button>
                    : <>
                        {userProfile?.location?.validatedLocation ?
                            <button onClick={handleClickToEditLocation} className="font-bold cursor-default px-2 -ml-2 border border-transparent">
                                {userProfile?.location?.validatedLocation}
                            </button>
                            : <div>
                                <button onClick={handleClickToEditLocation} className="w-full border border-transparent hover:border hover:border-gray-300 px-2 -ml-2 text-left font-bold cursor-default">
                                    Add location
                                </button>
                            </div>
                        }
                    </>
                }
            </>
        }
    </div>
}