import React from 'react';
import { UserProfileContext } from "../lib/reactContexts";
import PodWithList from "./PodWithList";

export default function ProfileExperience() {
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);

    function onSave(data) {
        setUserProfile({
            ...userProfile,
            experienceList: data
        })
    }

    return <PodWithList
        title="Experience"
        maxListItems={4}
        listItemPlaceholders={{
            name: "Technology",
            description: "Years"
        }}
        onSave={onSave}
        list={userProfile.experienceList || []}
    />
}