import React from 'react';
import { UserProfileContext } from "../lib/reactContexts";
import PodWithMap from './PodWithMap';

export default function ProfileLocationMap() {
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);

    function mapDescription() {
        const userFirstName = userProfile?.fullname?.split(' ')[0].trim();

        if (!!userFirstName) {
            return `${userFirstName} lives in ${userProfile?.location?.validatedLocation}`
        } else {
            return `${userProfile?.location?.validatedLocation}`
        }
    }

    return <PodWithMap
        mapImageSrc={userProfile?.location?.mapImageSrc}
        description={mapDescription()}
    />
}