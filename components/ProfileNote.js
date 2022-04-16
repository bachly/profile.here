import React from 'react';
import { UserProfileContext } from "../lib/reactContexts";
import PodWithNoteEditable from './PodWithNoteEditable';

export default function ProfileNote() {
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);

    function onSave(data) {
        setUserProfile({
            ...userProfile,
            notes: {
                ...userProfile.notes,
                note: data
            }
        })
    }

    return <PodWithNoteEditable
        title="Note"
        defaultValue={userProfile.notes?.note}
        onSave={onSave}
    />
}