import React from 'react';
import { UserProfileContext } from "../lib/reactContexts";
import PodWithList from "./PodWithList";

export default function ProfilePortfolio() {
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);

    function onSave(data) {
        setUserProfile({
            ...userProfile,
            projectList: data
        })
    }

    return <PodWithList
        id="portfolio-pod"
        title="Portfolio"
        subtitle="PHP, Ruby, Javascript"
        maxListItems={7}
        listItemPlaceholders={{
            name: "Project name",
            description: "Skills used"
        }}
        onSave={onSave}
        list={userProfile.projectList || []}
    />
}