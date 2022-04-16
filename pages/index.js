import clsx from 'clsx';
import React from 'react'
import Pod from '../components/Pod';
import PodWithList from '../components/PodWithList';
import PodWithMap from '../components/PodWithMap';
import ProfileImage from '../components/ProfileImage';
import ProfileLanguages from '../components/ProfileLanguage';
import ProfileLocation from '../components/ProfileLocation';
import ProfileName from '../components/ProfileName';
import ProfilePortfolio from '../components/ProfilePortfolio';
import ProfileExperience from '../components/ProfileExperience';
import SkillList from '../components/SkillList';
import { UserProfileContext } from '../lib/reactContexts';
import NavLink from '../components/NavLink';
import SelfIntro from '../components/SelfIntro';

export default function ProfilePage() {
    const [userProfile, setUserProfile] = React.useState({});

    return <>
        <header>
            <div className="top-bar py-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <img className="w-32" src="/img/toptal-logo-inverse.png"></img>
                            <div className="ml-3 text-white text-xl font-bold italic text-gray-400">
                                Exclusive access to top developers
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="text-white text-gray-300">
                                Join toptal as
                            </div>
                            <a className="bg-white rounded-sm text-black py-1 px-3 font-semibold uppercase tracking-wide ml-4" href="#">Developer</a>
                            <a className="bg-white rounded-sm text-black py-1 px-3 font-semibold uppercase tracking-wide ml-2" href="">Company</a>

                            <a className="bg-gray-500 rounded-sm text-white py-1 px-3 font-semibold uppercase tracking-wide ml-8" href="">Login</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-bar pb-5 bg-black">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <nav>
                        <NavLink>what</NavLink>
                        <NavLink>why</NavLink>
                        <NavLink>how</NavLink>
                        <NavLink>clients</NavLink>
                        <NavLink>team</NavLink>
                        <NavLink>labs</NavLink>
                        <NavLink>faq</NavLink>
                        <NavLink>contact</NavLink>
                    </nav>
                </div>
            </div>
        </header>

        <div className="max-w-6xl mx-auto">
            <div className="pt-12"></div>

            <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
                <section className="border-t border-l border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        <div className="col-span-1">
                            <ProfileImage />
                        </div>
                        <div className="lg:col-span-3 border-b border-r border-gray-200 bg-gray-100">
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

                        <ProfilePortfolio />
                        <ProfileExperience />

                        <Pod
                            title="Sample code and algorithms"
                        />
                        <Pod
                            title="Availability"
                        />
                        <Pod
                            title="The most amazing..."
                        />
                        <Pod
                            title="In clients I look for..."
                        />
                        <PodWithMap
                            mapImageSrc={userProfile?.location?.mapImageSrc}
                            description={`Martin lives in ${userProfile?.location?.validatedLocation}`}
                        />
                        <Pod
                            title="Note"
                        />
                    </div>
                </section>
            </UserProfileContext.Provider>
        </div>

        <SelfIntro></SelfIntro>
    </>
}