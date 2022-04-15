import React from 'react';

export const UserProfileContext = React.createContext({
    profileImageSrc: undefined,
    fullname: undefined,
    location: {
        validatedLocation: undefined,
        mapImageSrc: undefined
    },
    spokenLanguages: undefined,
    skillList: undefined,
    projectList: undefined,
    experienceList: undefined,
    notes: {
        mostAmazing: undefined,
        clientRequirements: undefined,
        note: undefined
    }
});