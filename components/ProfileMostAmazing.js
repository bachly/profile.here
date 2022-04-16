import React from 'react';
import { UserProfileContext } from "../lib/reactContexts";
import PodWithNoteEditable from './PodWithNoteEditable';

export default function ProfileMostAmazing() {
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);

    function onSave(data) {
        setUserProfile({
            ...userProfile,
            notes: {
                ...userProfile.notes,
                mostAmazing: data
            }
        })
    }

    return <PodWithNoteEditable
        title="The most amazing..."
        defaultValue={userProfile.notes?.mostAmazing}
        onSave={onSave}
    />
}