import clsx from 'clsx';
import React from 'react';
import ButtonTick from './ButtonTick';
import useAxios from 'axios-hooks'
import IconError from './IconError';
import { UserProfileContext } from '../lib/reactContexts';

export default function ProfileLocation() {
    const [isEditing, setIsEditing] = React.useState(false);
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);
    const [locationInput, setLocationInput] = React.useState(userProfile?.location?.validatedLocation);

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
                ...userProfile,
                location: {
                    validatedLocation: successValidatingLocation?.data?.validatedLocation,
                    mapImageSrc: successValidatingLocation?.data?.mapImageSrc
                }
            })
        }
    }, [successValidatingLocation])

    async function handleOnSubmit(event) {
        event && event.preventDefault();
        if (locationInput) {
            try {
                await validateLocation();
            } catch (err) {
                console.error("Error caught here", err);
                setIsEditing(false);
            }
        } else {
            setLocationInput(userProfile?.location?.validatedLocation);
            setIsEditing(false);
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

    function isFormValid() {
        return !!locationInput;
    }

    return <div onClick={stopPropagation}>
        {isEditing ?
            <>
                <form data-cypress="location-input-form" onSubmit={handleOnSubmit} className={clsx(`w-full bg-white border border-gray-300 -ml-2 flex items-center justify-between relative`)}>
                    <input autoFocus
                        defaultValue={locationInput}
                        className={clsx('font-bold top-0 left-0 w-full px-2 disabled:opacity-50', isValidatingLocation ? 'cursor-wait' : '')}
                        disabled={isValidatingLocation}
                        onChange={handleInputLocation}
                        name="location"
                    ></input>
                    <div className="absolute h-full top-0 right-1 flex items-center">
                        {isValidatingLocation ? <>
                            <div className="text-xs text-gray-300 cursor-wait">Validating city...</div>
                        </> :
                            <ButtonTick text="Save location" success={isFormValid()} />}
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
                    :
                    <button data-cypress="location-display" onClick={handleClickToEditLocation} className="w-full border border-transparent hover:border hover:border-gray-300 px-2 -ml-2 text-left font-bold cursor-default">
                        {userProfile?.location?.validatedLocation || 'Add location'}
                    </button>
                }
            </>
        }
    </div>
}