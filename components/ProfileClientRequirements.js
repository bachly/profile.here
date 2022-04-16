import React from 'react';
import { UserProfileContext } from "../lib/reactContexts";
import PodWithNoteEditable from './PodWithNoteEditable';

export default function ProfileClientRequirements() {
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);

    function onSave(data) {
        setUserProfile({
            ...userProfile,
            notes: {
                ...userProfile.notes,
                clientRequirements: data
            }
        })
    }

    return <PodWithNoteEditable
        title="In clients I look for..."
        defaultValue={userProfile.notes?.clientRequirements}
        onSave={onSave}
    />
}