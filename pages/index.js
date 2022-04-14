import clsx from 'clsx';
import React from 'react'
import Pod from '../components/Pod';
import PodWithList from '../components/PodWithList';
import ProfileImage from '../components/ProfileImage';
import ProfileLanguages from '../components/ProfileLanguage';
import ProfileLocation from '../components/ProfileLocation';
import ProfileName from '../components/ProfileName';
import SkillList from '../components/SkillList';

export default function ProfilePage() {
    return <>
        <header>
            <div className="top-bar py-8 bg-black">
            </div>

            <div className="nav-bar py-4 bg-black">
            </div>
        </header>

        <div className="max-w-6xl mx-auto">
            <div className="pt-12"></div>

            <section className="border-t border-l border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div className="col-span-1">
                        <ProfileImage />
                    </div>
                    <div className="lg:col-span-3 border-b border-r border-gray-200">
                        <div className="flex items-start">
                            <div className="flex-1 py-6 pl-10 pr-2">
                                <ProfileName></ProfileName>
                                <div className="pt-1"></div>
                                <ProfileLocation />
                                <ProfileLanguages></ProfileLanguages>
                                <div className="pt-4"></div>
                                <SkillList />
                            </div>
                            <div className="py-6 pr-6 pl-2">
                                <div className="flex items-center">
                                    <button className="bg-black text-white py-2 px-4 text-xs font-semibold tracking-wide uppercase rounded-full mr-1">Save Profile</button>
                                    <button className="bg-gray-300 text-white py-2 px-4 text-xs font-semibold tracking-wide uppercase rounded-full">Publish Profile</button>
                                </div>
                                <div className="mt-2">
                                    <div className="text-sm text-gray-300">(You can only publish a completed profile)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PodWithList
                        title="Portfolio"
                        subtitle="PHP, Ruby, Javascript"
                        maxListItems={7}
                        listItemPlaceholders={{
                            name: "Project name",
                            description: "Skills used"
                        }}
                        list={[
                            {
                                name: "NavalPlan",
                                description: "PHP, Ruby"
                            },
                            {
                                name: "MyTime",
                                description: "Javascript"
                            },
                            {
                                name: "Formidable",
                                description: "PHP, Ruby"
                            }
                        ]}
                    />
                    <PodWithList title="Experience"
                        list={[]}
                        maxListItems={4}
                        listItemPlaceholders={{
                            name: "Technology",
                            description: "Years"
                        }}
                    >

                    </PodWithList>
                    <Pod
                        title="Sample code and algorithms"
                    />
                    <Pod
                        title="Availability"
                    />
                </div>
            </section>
        </div>
    </>
}